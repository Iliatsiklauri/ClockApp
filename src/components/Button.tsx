import './button.css';

type ButtonProps = {
  setDisplay: any;
  display: boolean;
};

const Button = ({ setDisplay, display }: ButtonProps) => {
  const func = () => {
    setDisplay(!display);
  };
  return (
    <div className="btn" onClick={func}>
      <p className="more">{display ? 'MORE' : 'LESS'}</p>
      <div className={`round ${display ? 'upside-down' : null} `}>
        <img src="Group 3.png" alt="" />
      </div>
    </div>
  );
};

export default Button;
