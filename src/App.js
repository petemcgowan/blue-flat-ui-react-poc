import "./App.css";
import "./styles.css";
import { Header } from "./components/Header";
import React, { useState } from "react";

// Normal POC
import { LeftContainer } from "./components/LeftContainer";
import { MiddleContainer } from "./components/MiddleContainer";
import { RightContainer } from "./components/RightContainer";

// Specific POC
import { InputSection } from "./components/InputSection";
import { ResultsSection } from "./components/ResultsSection";
// import from "./Header";

function App() {
  const [translatePhraseResultPOC, setTranslatePhraseResultPOC] =
    useState("Awaiting result...");
  const [translatePhrasePOC, setTranslatePhrasePOC] = useState("");

  return (
    <div className="App">
      {/* Newsletter(input+button / right) + Tweets (text area / middle) is what I need */}
      {/* <Header /> */}
      {/* <LeftContainer /> */}
      {/* <MiddleContainer />
      <RightContainer /> */}
      <InputSection
        translatePhrasePOC={translatePhrasePOC}
        setTranslatePhrasePOC={setTranslatePhrasePOC}
        setTranslatePhraseResultPOC={setTranslatePhraseResultPOC}
      />
      <ResultsSection
        translatePhraseResultPOC={translatePhraseResultPOC}
        setTranslatePhraseResultPOC={setTranslatePhraseResultPOC}
      />
    </div>
  );
}

export default App;
