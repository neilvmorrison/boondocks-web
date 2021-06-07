import { useEffect, useState } from 'react';

const useContent = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState({});

  useEffect(() => {
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
  });

  return { loading, error, content };
};

export default useContent;
