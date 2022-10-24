import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useMutation} from 'react-query';
// import {AuthService} from '../../services/auth.service';

import style from './Login.module.sass';

function LogIn() {
  // const [data, setData] = useState({});

  // const {} = useMutation('login', () => AuthService.login(data.email, data.password), {
  //   onError: (arr) => {
  //     alert('error');
  //   },
  //   onSuccess: 
  // });

  return (
    <div className={style.loginWrapper}>
      <div>
        <h1>Войти в аккаунт</h1>
        <p>Пожалуйста, войдите в аккаунт</p>
      </div>
      <div>
        <input 
          // value={data.email} 
          // onChange={e => setData({...data, email: e.target.value})} 
          className="forms" 
          type="email" 
          placeholder="Почта" 
        />
        <input 
          // value={data.password}
          // onChange={e => setData({...data, password: e.target.value})}
          className="forms" 
          type="password" 
          placeholder="Пароль" 
        />
        <button type="submit">Войти</button>
        <Link to="/signup">
          <span>Зарегистрироваться</span>
        </Link>
      </div>
    </div>
  );
}
  
export default LogIn;