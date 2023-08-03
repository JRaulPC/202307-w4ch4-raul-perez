import "./SlothsForm.css";

const SlothsForm = (): React.ReactElement => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="field">
          <label
            aria-label="sloth name"
            className="name-field__label"
            htmlFor="name"
          >
            Sloth Name
          </label>
          <input
            aria-label="textbox"
            type="text"
            id="name"
            name=""
            className="name-field__input"
          />
        </div>
        <div className="field">
          <label className="name-field__label" htmlFor="url">
            URL Image
          </label>
          <input
            type="text"
            id="url
          "
            name=""
            className="name-field__input"
          />
        </div>
        <div className="field">
          <label className="name-field__label" htmlFor="url">
            Fingers numbers
          </label>
          <input
            type="text"
            id="url
          "
            name=""
            className="name-field__input"
          />
        </div>
        <button className="button">Enviar</button>
      </form>
    </div>
  );
};

export default SlothsForm;
