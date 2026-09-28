function fetchWithTimeout(url, ms) {
  let timerId;

  const timeoutPromise = new Promise((_, reject) => {
    timerId = setTimeout(() => {
      reject(new Error("Request Timed Out"));
    }, ms);
  });

  return Promise.race([
    fetch(url),
    timeoutPromise
  ]).finally(() => {
    clearTimeout(timerId);
  });
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));