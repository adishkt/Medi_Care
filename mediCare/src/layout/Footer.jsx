import logo from "../assets/image.png";

function Footer() {
  return (
    <footer className="w-full h-54 bg-gray-50 border-t border-gray-200">
      <div className="p-6">
        <img className="w-64" src={logo} alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
