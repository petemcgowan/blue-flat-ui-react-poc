import "../styles.css";

export function InputSection(props) {
  // translatePhrasePOC={translatePhrasePOC}
  // setTranslatePhrasePOC={setTranslatePhrasePOC}
  // setTranslatePhraseResultPOC={setTranslatePhraseResultPOC}

  const handleSubmitPOC = (evt) => {
    evt.preventDefault();

    console.log("props.translatePhrasePOC:" + props.translatePhrasePOC);

    props.setTranslatePhraseResultPOC("A Result");
  };

  return (
    <form onSubmit={handleSubmitPOC}>
      <div>
        {/* <!-- Input Text to Translate --> */}
        <div className="join-newsletter block">
          <h2 className="titular">English To German</h2>
          <div className="input-container">
            <input
              value={props.translatePhrasePOC}
              type="text"
              placeholder="English:<input text here> German:"
              onChangeText={(text) => props.setTranslatePhrasePOC(text)}
              className="email text-input"
            />
            {/* <div class="input-icon envelope-icon-newsletter">
            <span class="fontawesome-envelope scnd-font-color"></span>
          </div> */}
          </div>{" "}
          {/* input-container */}
          <button className="subscribe button" type="submit">
            TRANSLATE
          </button>
        </div>{" "}
        {/* join-newsletter */}
      </div>
    </form>
  );
}
