import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Welcome from "./components/pages/Welcome";
import Header from "./components/Header";
import MovieList from "./components/pages/MovieList";
import MovieListDetail from "./components/pages/MovieListDetail";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" component={Welcome}/>
          </Route>
          <Route path='/welcome' component={Welcome}></Route>
          <Route exact path="/movie" component={MovieList} />
          <Route path="/movie/:id" component={MovieListDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
