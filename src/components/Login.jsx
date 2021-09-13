import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  let history = useHistory();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/login`, { code })
      .then((res) => {
        console.log(`Res: ${res.data}`)
        localStorage.setItem('jwt', res.data);
        history.push('/hello');
        history.go(0);

      })
      .catch((err) => console.log(err.response));
  }, [code, history]);

  return (
    <div>
      <h3>Authentication in progress...</h3>
    </div>
  );
}

export default Login;