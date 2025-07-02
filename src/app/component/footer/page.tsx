import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <h1 className="font-bold text-8xl">
            Let’s chat
            <span className="material-icons text-8xl">arrow_right_alt</span>
          </h1>
        </aside>
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
      </footer>
      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4 bg-base-200">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};
