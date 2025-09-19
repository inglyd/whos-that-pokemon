import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage/home-page';
import GamePage from '../pages/GamePage/game-page';


const RoutesGame = () => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/game' component={GamePage} />
        </Switch>
    )

}

export default RoutesGame;

