import { useState } from "react";
import axios from "axios";

const useAxiosPost = (url, { method, body } = {}) => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function request() {
    setLoading(true);
    axios({
      url,
      method,
      data: body,
    })
      .then((response) => {
        setResponse(response.data);
        console.log(response.data, "tis")
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function appendData(newData) {
    setLoading(true);
    axios({
      url,
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(newData),
    })
      .then((response) => {
        setData((prevData) => [...prevData, response.data]); 
    })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { request, appendData, data, response, error, loading };
};

export default useAxiosPost;
