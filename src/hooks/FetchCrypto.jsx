import { useEffect, useState } from "react";

export default function FetchCrypto(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchAsync();
  }, [url]);

  return { loading, data, error };
}
