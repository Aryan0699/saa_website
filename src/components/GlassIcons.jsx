import './GlassIcons.css';

const gradientMapping = {
  blue: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  green: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  indigo: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  purple: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  red: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  gray: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  cyan: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  sky: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  pink: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))',
  amber: 'linear-gradient(135deg, hsl(0, 6%, 90%), hsl(0, 10%, 85%))'
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = color => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon-btn ${item.customClass || ''}`}
          aria-label={item.label}
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default GlassIcons;