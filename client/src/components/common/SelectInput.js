import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  options,
  name,
  onChange,
  placeholder,
  value,
  error,
  type,
  label,
  className,
  required = false,
  prepend,
}) => {
  let wrapperClass = "form-group";
  if (error) {
    wrapperClass += " " + "has-error";
  }
  let opt = options.map((option) => (
    <option className="text-capitalize" key={option.id} value={option.id}>
      {option.name}
    </option>
  ));
  const Pre = prepend;
  const selectobj = (
    <select
      required={required}
      type={type}
      name={name}
      className="form-control text-capitalize"
      value={value}
      onChange={onChange}
    >
      {placeholder ? <option className="text-mute">{placeholder}</option> : ""}
      {opt}
    </select>
  );
  return (
    <div className={wrapperClass + (className ? " " + className : "")}>
      {label ? <label htmlFor="name">{label}</label> : ""}
      {prepend ? (
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <Pre />
            </span>
          </div>
          {selectobj}
        </div>
      ) : (
        <>{selectobj}</>
      )}

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  prepend: PropTypes.func,
};

export default SelectInput;
