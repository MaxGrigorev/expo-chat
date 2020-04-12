import { navigate } from "@services/navigation";
import { routeNames } from "@constants";

export const navToDating = (params?) => navigate(routeNames.main.dating,params);
