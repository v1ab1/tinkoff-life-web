import Message from './Message';
import MyMessage from './MyMessage';
import style from './Chat.module.sass';

function Chat() {
    return (
      <div className={style.Chat}>
        <Message />
        <MyMessage />
      </div>
    );
  }
  
export default Chat;