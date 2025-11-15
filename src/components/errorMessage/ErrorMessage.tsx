import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
