
function CommonInput({value, onChangeFun, label, type}) {
    return (
        <div className="input-container">
            <div className="input-label">{label}</div>
            <input type={type} onChange={(e)=>onChangeFun(e.target.value)} required placeholder={label} className="input-common"  />
        </div>
    );
  }

  export default CommonInput;