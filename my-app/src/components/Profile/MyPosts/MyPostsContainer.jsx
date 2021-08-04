import React from "react";
import {
  addPostCreator,
  updateNewTextCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import {connect} from 'react-redux'
import myPosts from './MyPosts';


let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: (newPostText) => {
      dispatch(addPostCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(myPosts);
export default MyPostsContainer;
