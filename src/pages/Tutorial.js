import React from 'react';
import Button from '@material-ui/core/Button';
import PieceCustomize from '../components/customization/PieceCustomize';
import CustomPlayOption from '../components/customization/CustomPlayOption';
import './Tutorial.css';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsets: [],
      repeatOffsets: []
    }
  }

  handleClick = (offsets, repeatOffsets) => {
    this.setState({
      offsets,
      repeatOffsets
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Move Customization</h1>
        <div style={{ display: 'inline-block', textAlign: 'left', maxWidth: 500}}>
          <div style={{ margin: '1em' }} className="tutorial">
            <table>
              <tr>
                <td>&#8945;</td>
                <td>&#8942;</td>
                <td>&#8942;</td>
                <td>&#8942;</td>
                <td>&#8944;</td>
              </tr>
              <tr>
                <td>&#x2026;</td>
                <td>-17</td>
                <td>-16</td>
                <td>-15</td>
                <td>&#x2026;</td>
              </tr>
              <tr>
                <td>&#x2026;</td>
                <td>-1</td>
                <td>0</td>
                <td>+1</td>
                <td>&#x2026;</td>
              </tr>
              <tr>
                <td>&#x2026;</td>
                <td>+15</td>
                <td>+16</td>
                <td>+17</td>
                <td>&#x2026;</td>
              </tr>
              <tr>
                <td>&#8944;</td>
                <td>&#8942;</td>
                <td>&#8942;</td>
                <td>&#8942;</td>
                <td>&#8945;</td>
              </tr>
            </table>
          </div>
          <PieceCustomize
            offsets={this.state.offsets}
            repeatOffsets={this.state.repeatOffsets}
            hideInput={true}
          />        
          <div style={{ padding: '0.5em' }}>
            Chess pieces have two types of move offsets: exact offsets, which generate exact moves, and repeating offsets, which generate moves that can recur in a particular direction.
            <div style={{ marginTop: '0.25em' }}>
              <div>
                For example, the rook has the repeating offsets -1, -16, 1 and 16. Repeating offsets stop repeating on a square that is occupied by a piece.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([],[-1,1,16,-16])}>rook</Button>
              </div>
              <p>
                A rook that can move two steps at a time would have the repeating offsets -2, -32, 2 and 32. Click play below to test it.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([],[-2,2,32,-32])}>modified rook</Button>
              </p>
              <div>
                <CustomPlayOption fen={'4k3/8/8/8/2R1P3/8/8/4K3 w - - 0 1'} customPiece={{ 'r': { 0: [], 1: [-2,2,-32,32] } }}/>
              </div>
            </div>
            <hr/>
            <div>
              <p>
                The knight has the exact offsets -18, -33, -31, -14, 18, 33, 31 and 14.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([-18, -33, -31, -14, 18, 33, 31, 14], [])}>knight</Button>
              </p>
              <p>
                The nightrider has the exact offsets of the knight as repeating offsets.
                It can move like a knight any number of steps in each direction, although other pieces on the board can limit the range of movement.
                Click play below to test it.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([], [-18, -33, -31, -14, 18, 33, 31, 14])}>nightrider</Button>
              </p>
              <div>
                <CustomPlayOption fen={'8/8/7k/8/5P2/8/1D6/K7 w - - 0 1'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Tutorial;