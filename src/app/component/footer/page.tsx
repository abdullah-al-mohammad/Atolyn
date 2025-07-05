import React from "react";

export const Footer = () => {
  return (
    <footer className="md:flex text-white">
      <div className="footer sm:footer-horizontal bg-[#0E4242] py-4 px-2 md:p-0 items-center justify-center">
        <aside>
          <div className="font-bold text-4xl md:text-6xl pt-10">
            <a href="./">
            Let’s chat
            <i className="fa-solid fa-arrow-right ps-7 hover:transform hover:translate-x-0.5 ease-in-out transition-all"></i>
            </a>
          </div>
        </aside>
      </div>
      <div className="footer bg-[#0B3131] p-10 grid grid-cols-1 md:grid-cols-2">
        <nav>
          <h6 className="footer-title">Animation & motion graphics</h6>
          <a className="link link-hover">IT consulting & advisory</a>
          <a className="link link-hover">Digital marketing</a>
          <a className="link link-hover">Graphics design</a>
          <a className="link link-hover">Video editing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Custom software development</h6>
          <a className="link link-hover">Mobile App development</a>
          <a className="link link-hover">AI & automation system</a>
          <a className="link link-hover">Website development</a>
          <a className="link link-hover">UI-UX design</a>
        </nav>
        <nav>
        <h6 className="footer-title">Contact Info</h6>
            <h3>
              © {new Date().getFullYear()} NextEra
            </h3>
            <p>
              Email: contact@nextera.com
            </p>
            <p>
              Address: Dhaka, Bangladesh
            </p>
            <p className="flex gap-2">
              <a href="">About</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </p>
          </nav>
      </div>
    </footer>
  );
};
