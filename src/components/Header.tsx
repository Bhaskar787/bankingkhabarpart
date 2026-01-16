import Logo from "../assets/banking-logo.jpg"

function Header() {
  return (
    <section>
        <div className="container">
    <header className="py">
    <div>
        <img className="logo" src={Logo}alt="" />
    </div>
    </header>
    </div>
    </section>
  )
}

export default Header