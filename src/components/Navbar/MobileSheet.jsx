import "./MobileSheet.css";
import { navoptions, icons } from "./Navbar.jsx";
import userProfilePlaceholder from "../../assets/user-profile-placeholder.png"
import { socialMediaLinks } from "./Navbar.jsx";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";


export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger className="menu-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </SheetTrigger>

      <SheetContent className="mobile-sheet">

        <div className="sheet-top">

          <div className="profile">

            <img src={userProfilePlaceholder} alt="user-profile-image" srcSet="" /> 
           

            <div>
              <h2>Ved Teli</h2>
              <p>Full Stack Developer</p>
            </div>

          </div>


        </div>

        <nav>

          <ul className="mobile-nav">

            {navoptions.map((option, index) => (

              <li key={index}>

                <a href={option.Url}>

                  {icons[option.name]}
                  <span>{option.name}</span>

                </a>

              </li>

            ))}

          </ul>

        </nav>

        <div className="sheet-footer">

          {
            socialMediaLinks.map((obj) =>
              <a href={obj.url} target="_blank">{obj.name}</a>
            )
          }
        </div>

      </SheetContent>
    </Sheet>
  );
}