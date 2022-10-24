import {Link} from 'react-router-dom';

import style from './Login.module.sass';

function LogIn() {
    return (
      <div className={style.loginWrapper}>
        <div>
          <h1>Войти в аккаунт</h1>
          <p>Пожалуйста, войдите в аккаунт</p>
        </div>
        <div>
          <input className="forms" type="email" placeholder="Почта" />
          <input className="forms" type="password" placeholder="Пароль" />
          <button>Войти</button>
          <Link to="/signup">
            <span>Зарегистрироваться</span>
          </Link>
        </div>
      </div>
    );
  }
  
  export default LogIn;