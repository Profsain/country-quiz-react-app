import React from 'react'

const ActionBtn = ({ text, bgColor, color, border }) => {
    const styles = {
        backgroundColor: bgColor,
        color: color,
        border: border,
        borderRadius: "12px",
        padding: '10px 20px',
        fontSize: '16px',
    }

    return (
        <button className="Action" style={styles}>{text}</button>
    )
}

export default ActionBtn