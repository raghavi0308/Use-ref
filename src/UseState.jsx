import { useState } from "react";
import "./Use.css";

const Use = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [imageSrc, setImageSrc] = useState("");

    function handleFocus(inputId) {
        setFocusedInput(inputId);
    }

    function changeImage() {
        setImageSrc("https://www.svgrepo.com/show/374167/vite.svg");
    }

    return (
        <div className="container">
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder=" " 
                    className={`styled-input ${focusedInput === "input1" ? "focused" : ""}`} 
                />
                <label className="input-label">Input 1</label>
                <button onClick={() => handleFocus("input1")}>Focus Input 1</button>
            </div>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder=" " 
                    className={`styled-input ${focusedInput === "input2" ? "focused" : ""}`} 
                />
                <label className="input-label">Input 2</label>
                <button onClick={() => handleFocus("input2")}>Focus Input 2</button>
            </div>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder=" " 
                    className={`styled-input ${focusedInput === "input3" ? "focused" : ""}`} 
                />
                <label className="input-label">Input 3</label>
                <button onClick={() => handleFocus("input3")}>Focus Input 3</button>
            </div>

            <button onClick={changeImage}>View Image</button>
            <br />
            <img src={imageSrc} className="image-style" alt="" />
        </div>
    );
};

export default Use;
