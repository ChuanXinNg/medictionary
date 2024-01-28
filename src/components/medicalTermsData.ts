export interface MedicalTerm {
    category: string;
    term: string;
    definition: string;
    laymanTerm: string;
    normalRange: string;
    details: string;
  }
  
  export const MedicalTerms: MedicalTerm[] = [
    {
      category: "Diagnosis",
      term: "Hematocrit",
      definition: "Measurement of the percentage of red blood cells in the whole blood.",
      laymanTerm: "The amount of red blood cells in the blood.",
      normalRange: "Newborns: 55-68% Children: 36-40% Adult Males: 42-54% Adult Women: 38-46%",
      details: "Additional details about hematocrit...",
    },
    {
        category: "Symptoms",
        term: "Inflammation",
        definition: "A localised reaction that produces redness, warmth, swelling, and pain as a result of infection, irritation, or injury. Inflammation can be external or internal.",
        laymanTerm: "A reaction that will cause your body to feel redness, swelling, warmth and pain",
        normalRange: "",
        details: "",
      },
  ];
  