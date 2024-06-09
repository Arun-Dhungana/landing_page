import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const NavBar = () => {
  return (
    <header className="header">
      <nav className="header_navbar">
        <ul>
          <li>
            <Image
              height={48}
              width={160}
              src="/images/Company logo.png"
            ></Image>
          </li>

          <li>Home</li>
          <li>About Us</li>
          <li>Case Studies</li>
          <li className="resource">
            Resources <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </li>
        </ul>
        <span>
          <SearchIcon></SearchIcon>
        </span>
      </nav>
      <div className="header_content">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <button type="button">
          Why Catalog?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={16}
            height={16}
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              fill="white"
            />
          </svg>{" "}
        </button>
      </div>
    </header>
  );
};
