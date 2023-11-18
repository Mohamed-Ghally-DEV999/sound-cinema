import './user-switcher-nav.css';
import RoutingManager from '../routing-manager/routing-manager';
import UsersContainer from '../users-container/users-container';
import MainScreen from '../main-screen/main-screen';

function UserSwitcherNav() {
    return (
        <div>
            <RoutingManager path="/">
                <UsersContainer />
            </RoutingManager>

            <RoutingManager path="/MainScreen">
                <MainScreen />
            </RoutingManager>
        </div>
    )
};

export default UserSwitcherNav;