
function CommonInput({value, onChangeFun, label, type}) {
    return (
        <div className="input-container">
            <div className="input-label">{label}</div>
            <input type={type} onChange={onChangeFun} required placeholder={label} className="input-common"  />
        </div>
    );
  }

  export default CommonInput;