import { useContext } from "react";
import NavigationContext from "../contexts/nav-context";

function useNavigation() {
    return useContext(NavigationContext);
};

export default useNavigation;