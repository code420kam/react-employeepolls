import { Provider } from "react-redux";
import Login from "../components/Login";
import { render} from "@testing-library/react";
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
    const store = configStore();
    const {loginPage} = () => render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
});