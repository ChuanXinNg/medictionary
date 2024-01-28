import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BlockList } from "net";


const MyForm = () => {
  const [typedText, setTypedText] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(true);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedText(e.target.value);
  };

  const renderMessageContent = () => {



    return (
      // Return medical term details and explanation
      <div>
        <p>Typed Text: {typedText}</p>
        {/* Add additional content or styling as needed */}
      </div>
    );
  };

  return (
    <div>
      <Textarea
        className="text-area"
        value={typedText}
        onChange={handleTextChange}
        placeholder="Search for a medical term"
        style={
            {
                width: 320,
                height: 50,
                display: "block",
                margin: "auto"
            }
        }
      />
      {isMessageSent && renderMessageContent()}
    </div>
  );
};

export default MyForm;