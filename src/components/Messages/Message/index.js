import style from './Message.module.sass';

function Message({avatar, name, text}) {
    return (
      <div className={style.messages}> 
        
      </div>
    );
  }
Message.defaultProps = {
    avatar: './avatar.png',
    name: 'User',
    text: 'Hi! How are you?'
};
export default Message;