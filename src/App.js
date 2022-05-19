import React, { useContext, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  useEffect(() => {
    let xmlFile = new XMLHttpRequest();
    xmlFile.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xmlFile.responseXML)
      }
    }
    xmlFile.open("GET", "./data/Notes.xml");
    xmlFile.send();
  }, []);

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
        <MainHeader onLogout={ctx.onLogout} />
        <main>
          {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
          {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
        </main>
    </React.Fragment>
  );
}

export default App;