import { Provider } from "react-redux";
import Login from "../components/Login";
import AuthUser from "../components/AuthedUser";
import { render} from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/react";
import { Screen } from "@testing-library/react";
import configStore from "../redux/reducers/configStore";
import { BrowserRouter } from "react-router-dom";

describe("Login page testing", () => {
  //snapshot testing
  it("Snapshot test after login created", () => {
    const store = configStore();
    const {loginPage} = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(loginPage).toMatchSnapshot();
  });

  it("İf selectbox value emtpy", () => {
    const store = configStore("");
    const view =render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const cred = screen.getByTestId("selUser");
    fireEvent.change(cred, { target: { value: '' } });
    const submitButton = screen.getByTestId("submitButton");
    expect(submitButton).toBeDisabled();
  });
});