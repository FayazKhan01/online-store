import { Route, Routes } from "react-router-dom";
import Account from "./components/Account/Account";
import { AuthContextProvider } from "./components/context/UserAuthContext";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route exact path="/account" element={<Account />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
