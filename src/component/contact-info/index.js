import "./index.css";
import Heading from "../heading";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info__main">
        <img src={image} alt="Owner" className="contact-info__owner" />
        <div className="contact-info__block">
          <Heading>Господар-{name}</Heading>
          <div className="contact-info__sub-block">
            <span className="contact-info__sub-details">
              <a href={"tel:" + phone}>{phone}</a>
            </span>

            <span className="contact-info__sub-details">час відповіді: {response_time}</span>
            <span className="contact-info__sub-details">{response_rate}% відсотків швидкості відгуку</span>
          </div>
        </div>
      </div>

      <div>{info}</div>
    </div>
  );
}
