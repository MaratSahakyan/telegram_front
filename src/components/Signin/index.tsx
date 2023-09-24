// import TelegramSvg from '../../assets/svgs/TelegramSvg';
import PhoneSelectInputs from '../PhoneSelectInputs';
import styles from './styles.module.scss';

const SignIn = () => {
  return (
    <div className={styles.container}>
      {/* <div>
        <TelegramSvg />
        <h1>Telegram</h1>
        <p>Please confirm your country code and enter your phone number.</p>
      </div> */}
      <PhoneSelectInputs />
    </div>
  );
};

export default SignIn;
