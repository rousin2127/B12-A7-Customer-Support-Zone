import XImg from "./../assets/x.png"
import IImg from "./../assets/i.png"
import FImg from "./../assets/f.png"
import MImg from "./../assets/m.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">

      <div className="grid md:grid-cols-5   gap-8 sm:w-[1140px] mx-auto">
        <div className="flex flex-col items-center sm:items-start ">
          <h3 className="text-white font-semibold mb-2">
            CS — Ticket System
          </h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start" >
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-center sm:text-start">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm text-center sm:text-start">
            <li>Product & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-center sm:text-start">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm text-center sm:text-start ">
            <li className="flex items-center justify-center gap-1"> <img src={XImg} alt="" /> @CS-Ticket System</li>
            <li className="flex items-center justify-center gap-1"> <img src={IImg} alt="" /> @CS-Ticket System</li>
            <li className="flex items-center justify-center gap-1"><img src={FImg} alt="" /> @CS-Ticket System</li>
            <li className="flex items-center justify-center gap-1 w-fit"><img src={MImg} alt="" /> support@cs.com</li>
          </ul>
        </div>
      </div>
      <div className=" text-center text-gray-500 text-sm mt-8">
        © 2025 CS-Ticket System.
        <br className="block md:hidden" /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
