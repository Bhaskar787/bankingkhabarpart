import Logo from "../assets/banking-logo.jpg";

function Footer() {
  return (
    <section className="footer-section text-light top1">
      <div className="container py-4">
        <div className="row align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-12">
            <img className="logo mb-3" src={Logo} alt="Banking Khabar" />

            <ul className="footer-list">
              <li className="py-3">
                <i className="bi bi-card-text me-2"></i>
                सूचना विभाग दर्ता नं : २९१/०७३-७४66
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>
                फोन नं : 9851215417
              </li>
              <li>
                <i className="bi bi-building-fill me-2"></i>
                Office no: 01-5908911
              </li>
              <li>
                ✉️ समाचार : bankingkhabar72@gmail.com
              </li>
              <li>
                ✉️ विज्ञापन : bankingkhabaradv@gmail.com
              </li>
            </ul>
          </div>

          {/* GAP COLUMN */}
          <div className="col-lg-4 d-none d-lg-block"></div>

          {/* RIGHT SIDE */}
          <div className="col-lg-2 col-md-12 mt-4 mt-lg-0">
            <div className="footer-right">
              <p className="footer-title fw-bold">Chief Editor</p>
              <hr />
              <p className="footer-name">Madhav Nirdosh</p>

              <p className="footer-title fw-bold mt-3 ">Coordinator</p>
              <hr/>
              <p className="footer-name">Sandip B. K</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
