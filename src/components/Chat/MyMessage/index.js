import style from './MyMessage.module.sass';

function MyMessage({text}) {
    return (
      <div className={style.mymessage}>
            <div>
            {text}
            </div>
        </div>
    );
  }

MyMessage.defaultProps = {
    text: 'Blanvkjndz jfnadjn;o jdfnoc kns jsnmdoisnmd fgjnvjsndjfnjnfjanfnjanf Blanvkjndz jfnadjn;o jdfnoc kns jsnmdoisnmd fgjnvjsndjfnjnfjanfnjanf Blanvkjndz jfnadjn;o '
};
  
export default MyMessage;