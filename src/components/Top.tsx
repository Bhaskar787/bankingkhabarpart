
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";

function Top() {
  return (
    <div>
        <section className="py-2 text-light top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"> date 2026/1/14</div>
                    <div className="col-lg-6">
                        <ul className="d-flex justify-content-end gap-3">
                            <li><FaFacebookF /></li>
                            <li><FaSquareXTwitter /></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Top