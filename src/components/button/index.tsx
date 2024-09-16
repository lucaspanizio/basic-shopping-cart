import 'font-awesome/css/font-awesome.min.css';

interface IButtonProps {
  text: string;
  bgColor: string;
  icon?: string;
  iconColor?: string;
  handleClick: () => void;
}

export function Button({
  text,
  handleClick,
  icon,
  iconColor,
  bgColor,
}: IButtonProps) {
  return (
    <button onClick={handleClick} style={{ backgroundColor: bgColor }}>
      <span>
        {text}&nbsp;
        <i
          className={icon ?? 'fa fa-shopping-cart'}
          style={{ color: iconColor ?? '#FFF' }}
        ></i>
      </span>
    </button>
  );
}
