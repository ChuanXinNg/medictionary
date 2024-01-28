import React, { useState } from "react";
import { MedicalTerms } from "./medicalTermsData";
import { Textarea } from "@/components/ui/textarea"; // Import your Textarea component

interface MedicalCardProps {
  selectedTerm: string | null;
  typedText: string;
}

const MedicalCard: React.FC<MedicalCardProps> = ({ selectedTerm, typedText }) => {
  const termInfo = MedicalTerms.find((term) => term.term === selectedTerm);
  if (!termInfo) {
    return null; // Medical term not found
  }

  return (
    <div>
      <h2>{termInfo.term}</h2>
      <p><strong>Definition:</strong> {termInfo.definition}</p>
      <p><strong>Normal Range:</strong> {termInfo.normalRange}</p>
      <p><strong>Details:</strong> {termInfo.details}</p>
      <p><strong>Typed Text:</strong> {typedText}</p>
    </div>
  );
};

const MedicalTermsSelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [typedText, setTypedText] = useState<string>("");

  return (
    <div>
      <div>
        <h2>Categories</h2>
        {/* Add your category buttons here */}
      </div>
      <div>
        <h2>Medical Terms</h2>
        {MedicalTerms.map((term) => (
          <button key={term.term} onClick={() => setSelectedTerm(term.term)}>
            {term.term}
          </button>
        ))}
      </div>
      <div>
        <h2>Definition</h2>
        {/* Add your definition content here */}
      </div>
      <div>
        <h2>Normal Range</h2>
        {/* Add your normal range content here */}
      </div>
      <div>
        <h2>Details</h2>
        {/* Add your details content here */}
      </div>
      <div>
        <h2>Typed Text</h2>
        <Textarea
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div>
        <h2>Selected Medical Term</h2>
        {selectedTerm && <MedicalCard selectedTerm={selectedTerm} typedText={typedText} />}
      </div>
    </div>
  );
};

export default MedicalTermsSelector;
