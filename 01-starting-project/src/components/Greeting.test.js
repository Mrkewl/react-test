import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render Hello World as a text", () => {
    render(<Greeting />);

    const helloworld = screen.getByText("Hello World!");
    const greetings = screen.getByText("It's good to see you!");
    expect(helloworld).toBeInTheDocument();
    expect(greetings).toBeInTheDocument();
  });

  test("renders good to see you if the button was Not clicked", () => {
    render(<Greeting />);

    const greetings = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(greetings).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const greetings = screen.getByText("Changed!", {
      exact: false,
    });


    //Assert
    expect(greetings).toBeInTheDocument();
  });
  test("does not renders good to see you if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const greetings = screen.queryByText("It's good to see you!", {
      exact: false,
    });


    //Assert
    expect(greetings).toBeNull();
  });
});
