import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tweet from '../components/Tweet';
import API from '../api';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `${theme.spacing(2)}px 0`,
    padding: theme.spacing(2),
  },
}));

export default function SingleTweet() {
  const [showForm, setShowForm] = useState(false);
  const [tweet, setTweet] = useState(null);
  const params = useParams();
  const { id = null } = params;
  const classes = useStyles();

  async function loadTweet({ id }) {
    const data = await API.getTweet({ id });
    setTweet(data);
  }
  async function onLiked(e, id) {
    try {
      await API.likeTweet({ id });
      // setTweet({
      //   ...tweet,
      //   likes: tweet.likes ? tweet.likes + 1 : 1,
      // });
      await loadTweet({ id });
    } catch (error) {
      console.error(error);
    }
  }

  function onComment(e) {
    setShowForm(true);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const { comment } = e.target.elements;
    try {
      await API.newComment({ id, comment: comment.value });
      await loadTweet({ id });
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadTweet({ id });
  }, [id]);
  return (
    <>
      {tweet && <Tweet {...tweet} onLiked={onLiked} onComment={onComment} />}
      {showForm && (
        <form onSubmit={onSubmit}>
          <Paper className={classes.container}>
            <TextField
              label="Comment:"
              variant="outlined"
              name="comment"
              type="textarea"
              fullWidth
            />
          </Paper>
          <Button variant="contained" color="primary" type="submit">
            Comment
          </Button>
        </form>
      )}
      {tweet && tweet.comments.length > 0 && (
        <>
          {tweet.comments.map(({ comment, user, _id }) => {
            return (
              <Paper className={classes.container} key={_id}>
                <Typography variant="subtitle2" gutterBottom>
                  {user.name} @{user.username}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {comment}
                </Typography>
              </Paper>
            );
          })}
        </>
      )}
    </>
  );
}
