
function CommonBtn({ onChangeFun, label}) {
    return (
        
        <button className="enter-btn" value={label} onClick={onChangeFun} >{label}</button>
    );
  }
  export default CommonBtn;