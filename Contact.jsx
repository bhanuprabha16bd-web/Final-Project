import { useCallback } from "react";

function Contact() {
  const handleSubmit = useCallback(() => {
    alert("Message Sent!");
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
}

export default Contact;