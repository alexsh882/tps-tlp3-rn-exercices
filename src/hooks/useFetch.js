import { useState, useEffect } from "react";

export const useFetch = ({ func, eager = false }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (eager) {
      fetchData()
    }
  }, [func, eager]);

  const fetchData = () => {
    setLoading(true);
    func()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        return setError(err);
      });
      setLoading(false);
  };

  return { data, error, loading, fetchData };
};
