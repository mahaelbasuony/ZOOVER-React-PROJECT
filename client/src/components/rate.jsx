import "./rate.css";
function Rate({ item, name, maxval }) {
  return (
    <div className="aspects_rate">
      {name} ({item}/{maxval})
    </div>
  );
}
export default Rate;
