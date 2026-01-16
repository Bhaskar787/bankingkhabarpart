import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";

function Top() {
  const nepaliDate = new Intl.DateTimeFormat("ne-NP-u-ca-bikram", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());

  return (
    <section className="py-2 text-light top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {nepaliDate}
          </div>

          <div className="col-lg-6">
            <ul className="d-flex justify-content-end gap-3 mb-0 list-unstyled">
              <li><FaFacebookF /></li>
              <li><FaSquareXTwitter /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Top;
