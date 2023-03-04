import React from 'react'; 
import Styles from './reg.module.css'; 

function TextError(message: string) {
  return (
    <div className={Styles.errorMessageBox}> 
    {
        message
    }
    </div>
  )
}

export default TextError