import BuildIcon from "@mui/icons-material/Build";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DoneIcon from "@mui/icons-material/Done";
export const Latestresource = () => {
  return (
    <div className="latest">
      <div className="latest-heading">
        <h3>Latest Resources</h3>
        <p>
          The latest resources includes Transparency Toolkit,Evidence,Best
          Practices
        </p>
      </div>
      <div className="latest-cards">
        <div className="latest-card">
          <div>
            <span>
              <BuildIcon fontSize="medium"></BuildIcon>
            </span>
            Tool
          </div>
          <header>Defence Elvis</header>
          <p>
            It allows creating networks of public spending on goods services
            used in defense in 28 EU countries...
          </p>
          <footer>
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
        <div className="latest-card">
          <div>
            <span>
              <EventNoteIcon fontSize="medium"></EventNoteIcon>
            </span>
          </div>
          <header>.</header>
          <p>
            It allows creating networks of public spending on goods services
            used in defense in 28 EU countries...
          </p>
          <footer>
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
        <div className="latest-card">
          <div>
            <span>
              <DoneIcon fontSize="medium"></DoneIcon>
            </span>
          </div>
          <header>.</header>
          <p>
            It allows creating networks of public spending on goods services
            used in defense in 28 EU countries...
          </p>
          <footer>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
      </div>
      <span>
        <button type="button"> View all resources</button>
      </span>
    </div>
  );
};
