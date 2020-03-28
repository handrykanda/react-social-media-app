import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

//mui Components
import Grid from "@material-ui/core/Grid";

//components
import Post from "../components/posts/Post";
import Profile from "../components/profile/Profile";
//import PostSkeleton from '../util/PostSkeleton';

class home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    let latestPost = !loading ? (
      posts.map(post => <Post key={post.postId} postData={post} />)
    ) : (
      <p>Please wait...</p>
    );
    return (
      <Grid container spacing={5}>
        <Grid item sm={7} xs={12}>
          {latestPost}
        </Grid>
        <Grid item sm={5} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getPosts })(home);
