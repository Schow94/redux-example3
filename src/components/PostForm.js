import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div style={{ paddingBottom: '50px' }}>
        <h3>Add a New Post</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <button type="text">Submit</button>
          <br />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
