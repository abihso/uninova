/* eslint-disable react/prop-types */

const Logo = ({f,l,styles,lstyles}) => {
  return (
    <p className={styles} >
      {f} <span className={lstyles} > {l} </span>
    </p>
  )
}

export default Logo