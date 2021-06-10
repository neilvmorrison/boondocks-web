import { useEffect, useState } from 'react';
import axios from 'axios';

const useContent = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState({});

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        setContent(data);
      } catch (err) {
        setError(err);
        return err;
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, [url]);

  return { loading, error, content };
};

export default useContent;
