import style from './Message.module.sass';

function Message({avatar, name, text}) {
    return (
      <div className={style.message}>
        <img src={avatar} alt="name"/>
        <div>
          <div>
            {name}
          </div>
          <div>
            {text}
          </div>
        </div>
      </div>
    );
  }

Message.defaultProps = {
    avatar: './avatar.png',
    name: 'User',
    text: 'Blanvkjndz jfnadjn;o jdfnoc kns jsnmdoisnmd fgjnvjsndjfnjnfjanfnjanf'
};
  
export default Message;