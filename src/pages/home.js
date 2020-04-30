import React, { Component } from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

//mui Components
import Grid from "@material-ui/core/Grid";

//components
import Post from "../components/posts/Post";
import Profile from "../components/profile/Profile";
import PostSkeleton from "../util/PostSkeleton";

class home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    let latestPosts = !loading ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <PostSkeleton />
    );
    return (
      <Grid container spacing={5}>
        <Grid item sm={7} xs={12}>
          {latestPosts}
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
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPosts })(home);
