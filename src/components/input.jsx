/* eslint-disable react/prop-types */

const Input = ({type,placeholder,styles,name}) => {
  return (
      <input type={type} name={name} placeholder={placeholder} className={styles} />

  )
}

export default Input