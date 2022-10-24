import Message from './Message';

import style from './Messages.module.sass';
import vector from '../../svg/vector.svg';
import search from '../../svg/search.svg';

const arr = [1,2,3,4,5,6,7,8];

function Messages({avatar, name, text}) {
    return (
      <div className={style.Messages}> 
        <div>
          <img className={style.vector} src={vector} alt="" />
          <div>
            {arr.map(() => <img src={avatar} alt="" />)}
          </div>
          <img className={style.vector} src={vector} alt="" />
        </div>
        <div className={style.searchWrapper}>
          <input type="text" placeholder="Поиск" />
          <img src={search} alt="" />
        </div>
        <div>
          <h2>Все сообщения</h2>
          {arr.map(() => 
            <Message
              avatar={avatar}
              name={name}
              text={text}
            />
          )}
        </div>
      </div>
    );
  }
Messages.defaultProps = {
    avatar: './avatar.png',
    name: 'User',
    text: 'Hi! How are you?'
};
export default Messages;