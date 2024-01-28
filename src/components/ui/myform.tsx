import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MyForm = () => {
  const [typedText, setTypedText] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedText(e.target.value);
  };

  const handleSendMessage = () => {
    setIsMessageSent(true);
  };

  const renderMessageContent = () => {
    return (
      <div>
        <p>Typed Text: {typedText}</p>
        {/* Add additional content or styling as needed */}
      </div>
    );
  };

  return (
    <div>
      <Textarea
        value={typedText}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <Button onClick={handleSendMessage}>Send message</Button>
      {isMessageSent && renderMessageContent()}
    </div>
  );
};

export default MyForm;
