import {Link} from 'react-router-dom';
import { useState } from 'react';

import style from './Login.module.sass';

function LogIn() {
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {emailDirty, setEmailDirty} = useState(false);
  const {passwordDirty, setPasswordDirty} = useState(false);
  const {emailError, setEmailError} = useState('Почта не может быть пустая');
  const {passwordError, setPasswordError} = useState('Пароль не может быть пустым');

  return (
    <div className={style.loginWrapper}>
      <div>
        <h1>Войти в аккаунт</h1>
        <p>Пожалуйста, войдите в аккаунт</p>
      </div>
      <div>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <input className="forms" type="email" placeholder="Почта" />
        <input className="forms" type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
        <Link to="/signup">
          <span>Зарегистрироваться</span>
        </Link>
      </div>
    </div>
  );
}
  
  export default LogIn;