import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  autoComplete,
  name,
  onChange,
  placeholder,
  value,
  error,
  type,
  required = true,
  info,
  prepend,
}) => {
  let wrapperClass = "form-group";
  if (error) {
    wrapperClass += " " + "has-error";
  }
  const Pre = prepend;
  const input = (
    <input  
    style={{background:"#F1F1F1"}}
        label={"Add title"}
      required={required}
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete ? "on" : "off"}
    />
  );
  return (
    <div className={wrapperClass}>
      
      {prepend ? (
        
        <div className="input-group">
          <div className="input-group-prepend">
            
            <span className="input-group-text">
              
              <Pre />
            </span>
          </div>
          {input}
        </div>
      ) : (
        <>{input}</>
      )}

      {info ? (
        <small id="emailHelp" className="form-text text-muted">
          {info}
        </small>
      ) : (
        ""
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  info: PropTypes.string,
  prepend: PropTypes.func,
};

export default TextInput;
