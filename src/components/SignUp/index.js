import {Link} from 'react-router-dom';

import style from './SignUp.module.sass';

function SignUp() {
    return (
      <div className={style.signupWrapper}>
        <div>
          <h1>Регистрация</h1>
          <p>Пожалуйста заполните данные</p>
        </div>
        <div>
          <input className="forms" type="text" placeholder="Имя" />
          <input className="forms" type="text" placeholder="Фамилия" />
          <input className="forms" type="email" placeholder="Почта" />
          <input className="forms" type="password" placeholder="Пароль" />
          <input className="forms" type="password" placeholder="Подтвердите пароль" />
          <button>Зарегистрироваться</button>
          <Link to="/">
            <span>Войти</span>
          </Link>
        </div>
      </div>
    );
  }
  
  export default SignUp;