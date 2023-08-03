import "./SlothsForm.css";

const SlothsForm = (): React.ReactElement => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="field">
          <label className="name-field__label" htmlFor="name">
            Sloth Name
          </label>
          <input type="text" id="name" name="" className="name-field__input" />
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
          <button className="button">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default SlothsForm;
