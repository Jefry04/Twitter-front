import { useEffect, useState } from 'react';
import Tweet from '../components/Tweet';
import API from '../api';

function TweetList() {
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

  return (
    <div>
      {list.map((item) => {
        const { _id, content = '', user = {}, createdAt = '' } = item;
        const date = new Date(createdAt).toDateString();
        return <Tweet key={_id} content={content} user={user} date={date} />;
      })}
    </div>
  );
}

export default TweetList;
