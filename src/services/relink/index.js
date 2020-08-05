import { useEffect, useState } from 'react';

const API_URL = 'https://rel.ink/api/links';

export default function useRelink() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setLoading(false);
    setError(null);
  }, []);

  const shortenLink = async () => {
    try {
      setLoading(true);
      const result = await fetch(API_URL, { method: 'POST' }).data;
      setResponse(result);
    } catch (exception) {
      setError(exception);
    }
    setLoading(false);
  };

  return { response, loading, error, shortenLink };
}
