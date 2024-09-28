import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const App = () => {
  useEffect(() => {
    // Add a welcome message when the widget loads
    addResponseMessage("Hello! How can we help you today?");
  }, []);

  const handleNewUserMessage = (message) => {
    console.log(`New message incoming! ${message}`);
    // Process user message or send it to the backend for processing
    addResponseMessage("We'll get back to you soon.");
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Customer Support"
        subtitle="We are here to help!"
      />
    </div>
  );
};

export default App;
