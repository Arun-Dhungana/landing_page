import Image from "next/image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_log">
        <div className="footer_image">
          <Image height={48} width={160} src="/images/Company logo.png"></Image>
          <p>
            We are a collaboration of non-government organisation and
            professionals working to ensure that government spending.
          </p>
          <div className="footer_icons">
            <TwitterIcon fontSize="large"></TwitterIcon>
            <LinkedInIcon fontSize="large"></LinkedInIcon>
            <YouTubeIcon fontSize="large"></YouTubeIcon>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_link">
            <h5>Links</h5>
            <ul>
              <li>Campaigns</li>
              <li>Resources</li>
              <li>News</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer_link">
            <h5>Resources</h5>
            <ul>
              <li>Transparency Toolkit</li>
              <li>Evidence</li>
              <li>Best Practices</li>
            </ul>
          </div>
          <div className="footer_link">
            <h5>Work With Us</h5>
            <ul>
              <li>Contact Us</li>
              <li>Join Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bookmark">
        <h4>Terms and Conditions</h4>
        <h4>creative commotions</h4>
      </div>
    </footer>
  );
};
