import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value?: string;
}

const CustomInput = ({ name, label, value, ...rest }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div
        className={clsx(
          styles.outlinedInput,
          !!value && styles.fixOutlinedLabel
        )}
      >
        <label htmlFor={name} className={styles.outlinedLabel}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          className={styles.outlinedInputField}
          {...rest}
        />
      </div>
    </div>
  );
};

CustomInput.defaultProps = {
  type: 'text',
  value: 'ssss',
};

export default CustomInput;
