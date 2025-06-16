import { useRef } from "react";
import "./Use.css";

const Use = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const imgRef = useRef(null);

    function handleFocus(ref) {
        if (ref.current) {
            inputRef1.current.classList.remove("focused");
            inputRef2.current.classList.remove("focused");
            inputRef3.current.classList.remove("focused");

            ref.current.focus();
            ref.current.classList.add("focused");
        }
    }

    function changeImage() {
        if (imgRef.current) {
            imgRef.current.src = "https://www.svgrepo.com/show/374167/vite.svg";
        }
    }

    return (
        <div className="container">
            <div className="input-group">
                <input type="text" ref={inputRef1} placeholder=" " className="styled-input" />
                <label className="input-label">Input 1</label>
                <button onClick={() => handleFocus(inputRef1)}>Focus Input 1</button>
            </div>

            <div className="input-group">
                <input type="text" ref={inputRef2} placeholder=" " className="styled-input" />
                <label className="input-label">Input 2</label>
                <button onClick={() => handleFocus(inputRef2)}>Focus Input 2</button>
            </div>

            <div className="input-group">
                <input type="text" ref={inputRef3} placeholder=" " className="styled-input" />
                <label className="input-label">Input 3</label>
                <button onClick={() => handleFocus(inputRef3)}>Focus Input 3</button>
            </div>

            <button onClick={changeImage}>View Image</button>
            <br />
            <img ref={imgRef} className="image-style" />
        </div>
    );
};

export default Use;
