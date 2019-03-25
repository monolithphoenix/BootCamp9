import React, {useState} from 'react';

const ButtonHooks = () => {
    const [buttonText,setButtomText] = useState("Click me, please");
    function handleClick() {
        return setButtomText("Thanks, been clicked!");
    }
    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
};

export default ButtonHooks;