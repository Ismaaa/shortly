import axios from 'axios';

export default async function (method, url, data) {
  await axios({
    method,
    url,
    data,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((exception) => {
      console.error(exception);
    });
}
