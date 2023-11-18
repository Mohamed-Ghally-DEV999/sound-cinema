import useNavigation from "../../hooks/use-navigation";

function RoutingManager({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return children;
    }

    return null;
};

export default RoutingManager;