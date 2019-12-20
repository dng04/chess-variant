import React, {Component} from 'react';
import {List, Box, Container} from '@material-ui/core';
import PostCard from '../components/PostCard';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import NewPost from '../components/NewPost';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import getUserInfo from '../Utils/CurrentUser';
import getElapsedTime from '../Utils/ElapsedTime'
import * as Colors from '../Constants/Colors'


class DiscussionBoard extends Component{

    constructor(props){
        super(props)
        this.state = {
            showNewPostDialog: false,
            posts: []
        }
        this.currentUser =  null
        this.postCreationSubscription = null
    }

    async componentDidMount() {
        this.currentUser = await getUserInfo()
        let limit = 100
        let queryResult = await API.graphql(graphqlOperation(queries.listPosts,{limit: limit}));
        if(queryResult) {
            queryResult = queryResult.data.listPosts.items
            let posts = queryResult.map((post) => {
                let author = post.author.username
                return this.generatePostCard(post, author)
            })
            this.setState({posts})
            
            this.postCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreatePost)).subscribe({
                next: (postData) => {
                    let post = postData.value.data.onCreatePost
                    if(this.currentUser.id === post.author.id) return
                    let postCard = this.generatePostCard(post, post.author.username)
                    this.setState({posts: [postCard, ...this.state.posts]})
                },
            });
        }
    }

    componentWillMount() {
        if(this.postCreationSubscription)
            this.postCreationSubscription.unsubscribe()
    }

    showNewPostDialog = () => {this.setState({showNewPostDialog: true})}

    dismissNewPostDialog = () => {this.setState({showNewPostDialog: false})}

    handleNewPost = async (post) => {
        let createdAt = new Date().toJSON()
        post.author = this.currentUser
        post.createdAt = createdAt
        try {
            let createdPost = await API.graphql(graphqlOperation(mutations.createPost, { input: post}));
            let author = this.currentUser.username
            let newPostCard = this.generatePostCard(createdPost.data.createPost, author)
            this.setState({posts: [newPostCard, ...this.state.posts],})
        }
        catch(error) {console.log(error)}
        finally{
            this.setState({showNewPostDialog: false})
        }
    }

    generatePostCard(post, author){
        let elapsedTime = getElapsedTime(post.createdAt)
        let likeInfo = this.userLikesPost(post)
        return (
            <PostCard
                key = {post.id} 
                postId = {post.id}
                postLikeId = {likeInfo.postLikeId }
                author={author} 
                elapsedTime={elapsedTime}
                createdAt = {post.createdAt} 
                title={post.title} 
                content={post.content} 
                likesCount={post.likes.items.length}
                commentsCount={post.comments.items.length}
                liked = {likeInfo.like}
            />
        )
    }

    userLikesPost = (post) => {
        let likers = post.likes.items
        for(let i = 0; i < likers.length; i++){
            let likeObject = likers[i]
            if(likeObject.liker.id === this.currentUser.id) return {like:true, postLikeId: likeObject.id}
        }
        return {like:false, postLikeId: null}
    }

    render() {
        return (
            <Box display='flex' flexDirection='column' style={{marginLeft:this.props.marginLeft, width: this.props.width}}>
                <NewPost handleNewPost = {this.handleNewPost} onClose = {this.dismissNewPostDialog} open={this.state.showNewPostDialog}/>
                <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                    <Fab style={{backgroundColor: Colors.ROYAL_BLUE}} onClick={this.showNewPostDialog} color="primary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </Box>
                <List style={{marginTop: '10px'}}>{this.state.posts}</List>
            </Box>
        )
    }
}

export default DiscussionBoard