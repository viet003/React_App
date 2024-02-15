import { Routes, Route } from "react-router-dom";
import { Login, Main, ForgotPass, Profile, Lookup, Course, Home, Account, Topic, User } from "./containers/";
import { path } from "./utils/contants";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path={path.LOGIN} element={<Login />} /> 
        <Route path={path.MAIN} element={<Main />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.PROFILE} element={<Profile />} />
          <Route path={path.LOOKUP} element={<Lookup />} />
          <Route path={path.ACCOUNT} element={<Account />} />
          <Route path={path.COURSE} element={<Course />} />
          <Route path={path.TOPIC} element={<Topic />} />
          <Route path={path.USER} element={<User />} />
        </Route>
        <Route path={path.FORGOTPASS} element={<ForgotPass />} />
      </Routes>
    </div>
  );
}

export default App;
