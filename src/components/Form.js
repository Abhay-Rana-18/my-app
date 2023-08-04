import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form(props) {
  let [text, setText] = useState("");

  const updateUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to upper case.", "danger");
  };
  const updateLower = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lower case.", "warning");
  };

  const setContent = (event) => {
    setText(event.target.value);
  };

  const clrtext = ()=> {
    setText('');
    props.showAlert("all clear!", "success");
  }
  const copyText = () => {
    var text = document.getElementById("floatingTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard.", "success");
  }
  return (
    <>
      <div className="container mt-5">
        <h2>{props.heading}</h2>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            value={text}
            onChange={setContent}
            style = {{backgroundColor :`${props.mode==='light'?'rgb(220,220,220)': 'rgb(74,74,74)'}`, color: `${props.mode==='light'?'rgb(0, 0, 0)': 'white'}`}}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>

        <button className="btn btn-primary mt-4" onClick={updateUpper}>
          Change to upperCase
        </button>

        <button className="btn btn-secondary ms-2 mt-4" onClick={updateLower}>
          Change to lowerCase
        </button>

        <button className="btn btn-success ms-2 mt-4" onClick={clrtext}>
          Clear
        </button>

        <button className="btn btn-primary ms-2 mt-4" onClick={copyText}>copy!</button>

        <div className="container mt-4">
            <h2>Summmary</h2>
            <p>{text.split(" ").length-1} words & {text.length} characters.</p>
            <p>{0.0034 * text.split(" ").length-1} minutes to read.</p>

            <details>
                <summary>Preview</summary>
                <p>{text===''?'Write something in the text box...': text}</p>
            </details>
        </div>

      </div>
    </>
  );
}

Form.propTypes = {
  heading: PropTypes.string.isRequired,
  
};
Form.defaultProps = {
  heading: "Form",
};
