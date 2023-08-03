import { render, screen } from "@testing-library/react";
import SlothsForm from "./SlothsForm";

describe("Given a Sloth Form component", () => {
  describe("When a screen reader is used on it", () => {
    test("Then it should  read the text 'text box for a sloth name'", () => {
      render(<SlothsForm />);

      const ariaLabelText = screen.getByLabelText("sloth name");

      expect(ariaLabelText).toBeInTheDocument;
    });
  });
});
