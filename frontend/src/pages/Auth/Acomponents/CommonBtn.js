
function CommonBtn({ onChangeClick, label}) {
    return (
        
        <button className="enter-btn" value={label} onClick={onChangeClick} >{label}</button>
    );
  }
  export default CommonBtn;