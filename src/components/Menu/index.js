import style from './Menu.module.sass';
import message from '../../svg/message.svg';
import heart from '../../svg/heart.svg';

function Menu({avatar}) {
    return (
      <div className={style.Menu}>
        <img src={avatar} alt=""/>
        <img src={message} alt="" />
        <div></div>
        <img src={heart} alt="" />
      </div>
    );
  }
Menu.defaultProps = {
    avatar: './avatar.png',
};
export default Menu;