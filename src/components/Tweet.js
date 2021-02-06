import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function Tweet({
  id = '',
  content = '',
  date = '',
  user = {},
  likes = 0,
  comments = [],
  onSelected,
  onLiked,
  onComment,
}) {
  const classes = useStyles();

  function handleClick(e) {
    onSelected && onSelected(e, id);
  }
  function handleLiked(e) {
    e.stopPropagation();
    onLiked && onLiked(e, id);
  }

  function handleComment(e) {
    e.stopPropagation();
    onComment && onComment(e, id);
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${user.name} @${user.username}`}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleLiked}>
          {likes ? (
            <>
              <Typography variant="subtitle1" gutterBottom>
                {likes}
              </Typography>
              <FavoriteIcon />
            </>
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton onClick={handleComment}>
          {comments.length > 0 && (
            <Typography variant="subtitle1" gutterBottom>
              {comments.length}
            </Typography>
          )}
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
