import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.module.css"

const ChatInput = ({onSubmit}) => {

    const [inputValue, setInputValue] = React.useState("")
    
    const handleChange = (event) => {
        const textValue = event.target.value;
        setInputValue(textValue)
    }

    const handleSend = () => {
        if(inputValue.trim()) {
            onSubmit(inputValue);
            setInputValue("")
        }
    }

    return <div className={styles.container}>
        <input className={styles.input} type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSend} className={styles.button}>
            <p className={styles.buttonText}>
            Send
            </p>
        </button>
        </div>
}

ChatInput.propTypes = {
    onSubmit: PropTypes.func
}

export default ChatInput