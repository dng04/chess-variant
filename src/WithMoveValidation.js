import React, { Component } from "react";
import PropTypes from "prop-types";
import Chess from  "chess.js";
import Chessboard from "chessboardjsx";
// import rough from "roughjs"; // can give the squares a rough appearance
import GameData from './GameData.js';
import wn_test from "./wn.svg"; // testing the use of custom icons
import bn_test from "./bn.svg"; // testing the use of custom icons
import { API, graphqlOperation } from 'aws-amplify';
//import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';


class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    pgn: "",
    squareStyles: {}, // custom square styles
    pieceSquare: "", // piece on the most recently selected square
    gameOver: false,
    gameResult: "", // checkmate, stalemate, insufficient material, ...
    turn: ""
  };

  componentDidMount() {
    console.log('component reload', this.props.fen, this.props.pgn, this.props.gameToken, this.props.turn)
    this.game = new Chess(this.props.fen || this.state.fen); 
    // initialize the internal game
    // note that if this.props.fen is improperly formed,
    // chess.js will just initialize the game's fen to the default position
    this.setState({
      fen: this.game.fen(),
      turn: this.game.turn(),
    });
    this.updateGameResult(); // in case the FEN string gives an ending position
  }

  componentWillReceiveProps(nextProps) {
    console.log('getting props', this.props.fen, this.props.pgn, this.props.gameToken, this.props.turn, this.game.fen())
    if (nextProps.fen !== this.props.fen) {
      this.setState({
        fen: nextProps.fen,
      })
      this.game = new Chess(nextProps.fen);
    }
    if (nextProps.pgn !== this.props.pgn) {
      this.setState({
        pgn: nextProps.pgn
      })
    }
    if (nextProps.turn !== this.props.turn)  {
      this.setState({
        turn: nextProps.turn
      })
    }
  }

  // highlight hint squares
  highlightSquare = (hintSquares) => {
    const highlightStyles = [...hintSquares].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, rgba(255, 120, 12, 67%), 50%, transparent 10%)",
              borderRadius: "50%",
            }
          }
        };
      },
      {}
    );
    // show hints
    this.setState(({squareStyles}) => ({
      squareStyles: { ...squareStyles, ...highlightStyles }
    }));
  };

  updateGameResult() {
    if (this.game.game_over()) {
      this.setState({
        gameOver: true,
        gameResult: this.game.in_stalemate() ? "stalemate" : "repetition"
      });
    }
  }

  onSquareClick = (square) => {
    if (this.state.gameOver) return;

    // highlight the square you just clicked
    this.setState(() => ({
      squareStyles: { [square]: { backgroundColor: "#38f" } },
      pieceSquare: square
    }));
    // get list of possible moves for the piece on this square
    // (returns empty array if there are no possible moves or there is no piece)
    let moves = this.game.moves({
      square: square,
      verbose: true
    });

    // highlight the destination square of every possible move, moves[i].to
    const hintSquares = moves.map(move => move.to);
    this.highlightSquare(hintSquares);

    // process the case where the user has registered a move by clicking
    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q" // always promote to a queen for example simplicity
      // fix this so the user can choose what to promote to
    });
    
    // illegal move
    if (move === null) return;

    // legal move, so update the game state
    this.setState({
      fen: this.game.fen(),
      pgn: this.game.pgn(),
      pieceSquare: "",
      turn: this.game.turn()
    });

    // end the game if necessary
    this.updateGameResult();

    // call API
    if (this.props.gameToken) {
      console.log('update db')
      this.updateDatabase();
    }
  };

  updateDatabase = async () => {
    // TODO
    const data = {
      id: this.props.gameToken,
      fen: this.game.fen(),
      pgn: this.game.pgn(),
      turn: this.game.turn(),
      // game result?
    }
    const updateGame = await API.graphql(graphqlOperation(mutations.updateGame, {input: data}));
    console.log('update db', updateGame)
  }

  // When right clicking, we preserve the old squareStyles (we merely append the new style).
  // This will allow the user to have multiple squares be highlighted simultaneously,
  // for whatever reason (annotation?)
  onSquareRightClick = square =>
    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, [square]: { backgroundColor: "#e86c65" } }
    }));

  calcWidth = (dimensions) => {
    if (dimensions.screenWidth < 640 || dimensions.screenHeight < 640) {
      return Math.min(560/640 * dimensions.screenWidth, 560/640 * dimensions.screenHeight);
    }
    return 560;
  }
th
  render() {
    console.log(this.state);
    const { fen, pgn, turn, gameResult, squareStyles } = this.state;
    return this.props.children({
      squareStyles,
      fen,
      pgn,
      gameResult,
      turn,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick,
      calcWidth: this.calcWidth
    });
  }
}

export default function WithMoveValidation(gameToken='', turn='w', pgn='', start_fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', customWidth=540, showData=true) {
  console.log('func reload', start_fen, pgn, gameToken, turn)
  return (
    <div>
      <HumanVsHuman fen={start_fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'} pgn={pgn} turn={turn} gameToken={gameToken}>
        { /* HumanVsHuman calls the following function as this.props.children() in its render() method */ }
        {({
          squareStyles,
          fen,
          pgn,
          gameResult,
          turn,
          onSquareClick,
          onSquareRightClick,
          calcWidth,
        }) => (
          <div className="row">
            {
              showData ? (
              <div className="col-lg-5">
                <GameData fen={fen} pgn={pgn} turn={turn} gameResult={gameResult} />
              </div>
              ) :
              null
            }
            <div className="col-lg-7">
              <Chessboard
                id="humanVsHuman"
                width={customWidth}
                position={fen}
                boardStyle={{
                  borderRadius: "5px",
                  boxShadow: `0 2px 3px rgba(0, 0, 0, 0.5)`
                }}
                pieces={{
                  wN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth
                      }}
                      src={wn_test}
                      alt={"wn_test"}
                    />
                  ),
                  bN: ({ squareWidth }) => (
                    <img
                      style={{
                        width: squareWidth,
                        height: squareWidth
                      }}
                      src={bn_test}
                      alt={"bn_test"}
                    />
                  )
                }}
                lightSquareStyle={{ backgroundColor: "#ffffff" }}
                darkSquareStyle={{ backgroundColor: "#65cae8" }}      
                squareStyles={squareStyles}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
                calcWidth={calcWidth}
                draggable={false}
              />
            </div>
          </div>
        )}
      </HumanVsHuman>
    </div>
  );
}
