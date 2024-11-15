'use client'
import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "bogidemas@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div>
      <button className="btn btn-gradient btn-success" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  );
};

export default CopyEmailButton;
