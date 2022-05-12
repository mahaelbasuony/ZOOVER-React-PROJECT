import "./SlideAverageRate.css";
function SlideAverageRate({ value, maxval }) {
  return (
    <div>
      <progress
        type="range"
        min="1"
        max={maxval}
        value={value}
        className="slider"
      >
        {value}
      </progress>
    </div>
  );
}

export default SlideAverageRate;
