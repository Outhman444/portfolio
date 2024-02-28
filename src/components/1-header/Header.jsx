import { useEffect, useState,useRef } from "react";
import'./header.css';
import AudioPlayer from "../../song";




const Header = () => {



  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    
    <header className="  flex">
    < AudioPlayer />
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a>About</a>
          </li>

          <li>
            <a >Articles</a>
          </li>
          <li>
            <a >Projects</a>
          </li>
          <li>
            <a>Speaking</a>
          </li>
        
          <li>
            <a>Contact</a>
            
          </li>
        </ul>
      </nav>

      

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
              
              
             

             
            </li>
            <a href="">Contact</a>
          </ul>
        </div>
      )}
      
     

    </header>
  );
};

export default Header;
// vite.config.js

