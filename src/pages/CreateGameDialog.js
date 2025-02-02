import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


class CreateGameDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesPerSide: '5',
      variant: 'standard',
    };
  }

    setVariant = (e) => {
      this.setState({ variant: e.target.value });
    }

    setMinutesPerSide = (e) => {
      this.setState({ minutesPerSide: e.target.value });
    }

    setOpponent = (e, val) => {
      if (val) {
        this.setState({ opponent: { id: val.id, username: val.username } });
      }
    }

    handleSearch = async (e) => {
      // clear the search results each time the search input is updated
      this.setState({
        searchResults: [],
      });
      const input = e.target.value;
      // start searching after 2 characters input
      if (input.length > 2) {
        const filter = {
          username: {
            contains: input,
          },
        };
        const queryResult = await API.graphql(graphqlOperation(queries.listUsers, { filter }));
        this.setState({
          searchResults: queryResult.data.listUsers.items,
        });
      }
    }

    render() {
      const { props, state } = this;
      return (
        <Dialog open={props.showDialog} maxWidth="sm" fullWidth onClose={props.closeDialog}>
          <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
          <DialogContent style={{marginTop: '-15px'}}>
            <FormControl style={{width: '100%' }}>
              <Box display='flex' flexDirection='row' justifyContent='space-between'>
              <Box 
                display='flex' flexDirection='row' 
                justifyContent='flex-start'
                alignItems='center'
              >
                  <Typography style={{marginRight: '10px'}}>Variant</Typography>
                  <select
                    id="select-variant"
                    data-testid="select-variant"
                    value={state.variant}
                    onChange={this.setVariant}
                    style={{height: '30px'}}
                  >
                    <option value="Standard">Standard</option>
                    <option value="Antichess">Antichess</option>
                    <option value="Gridchess">Grid chess</option>
                    <option value="Extinction">Extinction chess</option>
                  </select>
                  <br />
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                  <Autocomplete
                    className="d-inline-block"
                    id="search-bar"
                    style={{ width: 250 }}
                    getOptionLabel={(option) => option.username}
                    noOptionsText="No Opponent Selected"
                    options={state.searchResults}
                    onChange={this.setOpponent}
                    onInputChange={this.handleSearch}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select an Opponent"
                        fullWidth
                      />
                    )}
                  />
                </Box>
                </Box>
            </FormControl>
            <div style={{ width: '100%', marginTop: '15px' }}>

              <input
                onChange={this.setMinutesPerSide}
                type="range"
                defaultValue={5}
                min={1}
                max={180}
                className="custom-range"
                id="customRange1"
              />
              <InputLabel htmlFor="customRange1">
                            Minutes per side:
                {' '}
                {state.minutesPerSide}
              </InputLabel>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Button
                style={{ marginRight: '20px', padding: '20px', color: 'black' }}
                variant="contained"
                onClick={(gameInfo, event) => props.createGame(event, {
                  creatorOrientation: 'white',
                  variant: state.variant,
                  time: state.minutesPerSide,
                  opponent: state.opponent,
                })}
                id="btnwhite"
              >
                            WHITE
              </Button>
              <Button
                style={{ padding: '20px', backgroundColor: '#333333', color: 'white' }}
                variant="contained"
                onClick={(event) => props.createGame(event, {
                  creatorOrientation: 'black',
                  variant: state.variant,
                  time: state.minutesPerSide,
                  opponent: state.opponent,
                })}
                id="btnblack"
              >
                            BLACK
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    }
}

export default CreateGameDialog;