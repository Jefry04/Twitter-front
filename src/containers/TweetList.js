import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tweet from '../components/Tweet';
import API from '../api';

function TweetList() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  async function loadList() {
    try {
      const data = await API.getTweets();
      setList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  function onSelected(e, id) {
    history.push(`tweets/${id}`);
  }

  async function onLiked(e, id) {
    try {
      await API.likeTweet({ id });
      // await loadList()
      const tweet = await API.getTweet({ id });
      const newList = list.map((item) => {
        if (item.id === id) return tweet;
        return item;
      });
      setList(newList);
    } catch (error) {
      console.error(error);
    }
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

export default TweetList;
