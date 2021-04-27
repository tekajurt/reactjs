import Template from './componentes/template'
import About from './componentes/about'
import Users from './componentes/users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Header</h1>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/*
                links que son etiquetas de react para el redireccionado (routing)
              */}
              <Link className="nav-item nav-link" activeStyle={{ "background-color": '#bdc3c9!important' }} to="/">Home</Link>
              <Link className="nav-item nav-link" to="/about">About</Link>
              <Link className="nav-item nav-link" to="/users">Users</Link>
            </div>
          </div>
        </nav>
        {/*
          switch es una etiqueta jsx de react que permite gestionar el routing, notece la diferencia que la etiqueta de arriba es Router, aca para
          cada ruta es "Route", donde como parametro se le agrega el path="" para demostrar lo que sucede luego de el / (incluyendo el /)
        */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            {/*
            el exact es para renderizar solo cuando el / esta solo, sino se asume arriba que, por ejemplo,  / y users en la misma vez
          */}
            <Template />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}
export default App;
