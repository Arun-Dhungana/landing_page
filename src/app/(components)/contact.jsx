export const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <p>
        If you have any further inquires, please let us know by filling the form
        below
      </p>
      <form>
        <div className="same_line">
          <label htmlFor="first_name" className="first_name">
            First name
          </label>
          <input id="first_name" type="text"></input>
          <label htmlFor="last_name" className="last_name">
            Last name
          </label>
          <input id="last_name" type="text"></input>
        </div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text"></input>
        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>
        <span>
          <button type="button"> Submit</button>
        </span>
      </form>
    </div>
  );
};
