import React, {Component} from 'react';
import {List, Container, Box, Button, TextField, Dialog, DialogContent} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputBase from '@material-ui/core/InputBase';
import * as Colors from '../Constants/Colors'

class NewPost extends Component {

    constructor(props){
        super(props)
        this.title = ''
        this.content = ''
    }
    setTitle = (e) => {
        this.title = e.target.value
    }
    
    setContent = (e) => {
        this.content = e.target.value
    }
    render(){
        return(
            <Dialog onClose={this.props.onClose} maxWidth='sm' fullWidth={true} open={this.props.open}>
                <DialogContent>
                    
                    <Box style={{marginLeft: '-15px', marginRight: '-15px', backgroundColor: 'white'}} display='flex' flexDirection='column'>
                        <TextField
                            style={{fontFamily: 'Arial Helvetica sans-serif', fontWeight: 'bold'}}
                            variant='outlined'
                            margin='dense'
                            onChange = {this.setTitle}
                            placeholder='Enter title'
                        />
                        <InputBase
                            style={{ 
                                marginTop: '10px', 
                                border:'1px solid lightGray', 
                                borderRadius:'4px', 
                                fontFamily: 'Verdana',
                                paddingTop: '10px',
                                paddingLeft: '10px',
                                
                            }}
                            multiline={true}
                            onChange = {this.setContent}
                            rows={10}
                            rowsMax={Infinity}
                            placeholder="Start writing here."
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'
                            style={{ margin: '10px 0px 10px 10px', backgroundColor: 'white', height: '50px' }}>
                            <Button style={{backgroundColor: Colors.ROYAL_BLUE}} onClick={(post) => this.props.handleNewPost({title: this.title, content: this.content})} variant="contained" color="primary">Submit</Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        )
    }
}

export default NewPost