import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tweet from '../components/Tweet';
import { connect } from 'react-redux';
import { fetchTweets } from '../store/reducers/tweets/actions';
//import API from '../api';

function TweetList({ list, loadList }) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadList();
  }, [loadList]);

  useEffect(() => {
    if (list !== null) {
      setLoading(false);
    }
  }, [list]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  function onSelected(e, id) {
    history.push(`tweets/${id}`);
  }

  async function onLiked(e, id) {
    // try {
    //   await API.likeTweet({ id });
    //   // await loadList()
    //   const tweet = await API.getTweet({ id });
    //   const newList = list.map((item) => {
    //     if (item.id === id) return tweet;
    //     return item;
    //   });
    //   setList(newList);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <div>
      {list.map((item) => {
        return (
          <Tweet
            key={item.id}
            onSelected={onSelected}
            onLiked={onLiked}
            onComment={onSelected}
            {...item}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.tweets.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadList: () => dispatch(fetchTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);
