
function CommonInput({value, onChangeFun, label}) {
    return (
        <div className="input-container">
            <div className="input-label">{label}</div>
            <input type="email" required placeholder={label} className="input-common"/>
        </div>
    );
  }

  export default CommonInput;