import React from 'react';

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-12 text-white">
      <div className="footer sm:footer-horizontal bg-[#0E4242] py-4 px-2 md:p-0 items-center justify-center group col-span-7">
        <aside>
          <div className="font-bold text-4xl md:text-8xl pt-10">
            <a href="./" className="flex items-center">
              Let’s chat
              <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-5 transition-all duration-500 ease-in-out">
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </span>
            </a>
          </div>
        </aside>
      </div>
      <div className="col-span-5">
        <div className="footer bg-[#0B3131] p-10 grid grid-cols-1 md:grid-cols-2">
          <nav>
            <a className="link link-hover">Animation & motion graphics</a>
            <a className="link link-hover">IT consulting & advisory</a>
            <a className="link link-hover">Digital marketing</a>
            <a className="link link-hover">Graphics design</a>
            <a className="link link-hover">Video editing</a>
          </nav>
          <nav>
            <a className="link link-hover">Custom software development</a>
            <a className="link link-hover">Mobile App development</a>
            <a className="link link-hover">AI & automation system</a>
            <a className="link link-hover">Website development</a>
            <a className="link link-hover">UI-UX design</a>
          </nav>
          <nav>
            <h6 className="footer-title">© {new Date().getFullYear()} NextEra</h6>
            <a className="link">contact@nextera.com</a>
            <p>Dhaka, Bangladesh</p>
            <p className="flex gap-4">
              <a href="">About</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
};
