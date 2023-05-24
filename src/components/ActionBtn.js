import React from 'react'

const ActionBtn = ({ text, bgColor, color, border, action }) => {
    const styles = {
        backgroundColor: bgColor,
        color: color,
        border: border,
        borderRadius: "12px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
    }

    return (
        <button 
            onClick={action}
            className="Action" 
            style={styles}>{text}
        </button>
    )
}

export default ActionBtn