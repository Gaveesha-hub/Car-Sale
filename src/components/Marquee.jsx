const brands = ["TOYOTA", "HONDA", "BMW", "MERCEDES", "AUDI", "NISSAN", "SUZUKI", "TESLA", "PORSCHE"];
export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...brands, ...brands, ...brands].map((b, i) => <span key={i}>{b} <i>✦</i></span>)}
      </div>
    </div>
  );
}