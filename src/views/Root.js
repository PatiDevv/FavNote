import React from "react";
import { BrowserRouter, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import MainTemplate from "../components/templates/MainTemplate";
import Articles from "./Articles";
import DetailsPage from "./DetailsPage";
import Notes from "./Notes";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Twitters from "./Twitters";
import { routes } from "../../src/routes/index";
import store from "../store/index";

function PrivateRoute({ children, ...rest }) {
  const userID = useSelector((s) => s.userID);
  const isLoggedIn = userID != null;
  return <Route {...rest} component={isLoggedIn ? rest?.component : undefined} render={isLoggedIn ? undefined : () => <Redirect to="/login" />} />;
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.login} component={LoginPage} />
            <PrivateRoute exact path={routes.notes} component={Notes} />
            <PrivateRoute exact path={routes.note} component={DetailsPage} />
            <PrivateRoute exact path={routes.articles} component={Articles} />
            <PrivateRoute exact path={routes.article} component={DetailsPage} />
            <PrivateRoute exact path={routes.twitters} component={Twitters} />
            <PrivateRoute exact path={routes.twitter} component={DetailsPage} />
            <Route path={routes.notfound}>
              <div>Page Not Found</div>
            </Route>
            <Route path={"*"} render={() => <Redirect to={routes.notfound} />} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
