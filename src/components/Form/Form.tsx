import {FC, FormEvent, useState} from 'react';

import {useAppSelector} from "../../hooks/redux-hooks";

import styles from "./Form.module.scss";

interface IFormProps {
  title: string,
  handleClick: (email: string, pass: string) => void
}

const Form: FC<IFormProps> = ({title, handleClick}) => {

  const error = useAppSelector(state => state.user.error)

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleClick(email, pass)
  }


  return (
    <form className = {styles.form} onSubmit = {onSubmit}>
      <label htmlFor = "">
        <input
          type = "email"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          className = {styles.input}
          placeholder = "email"
          autoComplete = "true"
        />
      </label>
      <label htmlFor = "" className = {styles['label-password']}>
        <input
          type = {isShowPassword ? 'text' : "password"}
          value = {pass}
          onChange = {(e) => setPass(e.target.value)}
          className = {styles.input}
          placeholder = "password"
          autoComplete = "current-password" id = "current-password"
        />
        <button className = {styles['toggle_password']} id = "toggle-password" type = "button"
                aria-label = {!isShowPassword ? "Показать пароль в виде простого текста. Предупреждение: в этом случае ваш пароль будет отображен на экране." : 'Скрытие пароля.'}
                onClick = {() => setIsShowPassword(p => !p)}
        >
          {isShowPassword ?
            <svg width = "24" height = "24" viewBox = "0 0 24 24" fill = "none" xmlns = "http://www.w3.org/2000/svg">
              <path
                d = "M12 9C10.358 9 9 10.359 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
                fill = "black" />
              <path
                d = "M12 5C4.408 5 2.12632 11.617 2.10543 11.684L2 12L2.10444 12.316C2.12632 12.383 4.408 19 12 19C19.592 19 21.8737 12.383 21.8946 12.316L22 12L21.8956 11.684C21.8737 11.617 19.592 5 12 5ZM12 17C6.67774 17 4.61587 13.154 4.11657 12C4.61786 10.842 6.68072 7 12 7C17.3223 7 19.3841 10.846 19.8834 12C19.3821 13.158 17.3193 17 12 17Z"
                fill = "black" />
            </svg> :
            <svg id = "Flat" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 256 256">
              <path
                d = "M229.15625,163.8125a6.00012,6.00012,0,1,1-10.39258,6l-19.45459-33.69531A121.90878,121.90878,0,0,1,161.07288,153.79l6.1322,34.77441a6.00077,6.00077,0,0,1-4.86719,6.95117,6.09807,6.09807,0,0,1-1.04883.0918,6.002,6.002,0,0,1-5.90234-4.959L149.32861,156.294a134.20549,134.20549,0,0,1-42.74682-.01368l-6.05738,34.35547a6.002,6.002,0,0,1-5.90234,4.959,6.09915,6.09915,0,0,1-1.04883-.0918,6.00077,6.00077,0,0,1-4.86719-6.95117l6.13306-34.78467a121.90305,121.90305,0,0,1-38.1914-17.68018L37.085,169.9707a6.00012,6.00012,0,0,1-10.39258-6l20.33618-35.22314a145.19157,145.19157,0,0,1-19.69653-20.102,5.9998,5.9998,0,0,1,9.334-7.541,130.85353,130.85353,0,0,0,21.582,21.25586c.12158.085.23645.17578.34985.26856A111.50451,111.50451,0,0,0,128,146a111.50161,111.50161,0,0,0,69.38867-23.36182c.10523-.08447.21094-.16845.32288-.24658A130.83245,130.83245,0,0,0,219.333,101.10449a5.9998,5.9998,0,1,1,9.334,7.541,145.15186,145.15186,0,0,1-19.73681,20.13525Z" />
            </svg>}
        </button>
      </label>
      {error && <div className = {styles.error}>{error}</div>}
      <button
        className = {styles['btn-submit']}
        type = "submit"
      >
        {title}
      </button>
    </form>
  )
}

export default Form;
