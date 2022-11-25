import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // useEffect fires the callback function in 1st argument when the page loads
  // if no 2nd argument specified, useEffect fires on every re-render of the dom - whenever anything changes
  // putting an empty array for 2nd argument means the dependency list is empty - meaning useEffect will only run on page load
  // putting dependencies in the list means useEffect runs at page load and also when those dependencies changes
  useEffect(() => {
    const abortCont = new AbortController();

    // setTimeout is used to simulate real world request
    setTimeout(()=> {
      fetch(url, { signal: abortCont.signal }) // 2nd argument of fetch is options for the fetch, can use this to associate the abort function to this fetch
      .then(res => {
        console.log(res);
        if(!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }
}

export default useFetch;