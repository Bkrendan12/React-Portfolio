import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <p>Enter your name:</p>
        <input name="name" type="text" />
        <p>Enter your email:</p>
        <input email="email" type="text" />
        <p>Leave a message:</p>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default Contact;
