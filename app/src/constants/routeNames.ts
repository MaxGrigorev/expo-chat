interface RouteNamesBase {
  index: string;
}

export interface RouteNames {
  main: RouteNamesBase;
}

const routeNames: RouteNames = {
  main: {
    index: "MainScreen"
  },
};

export { routeNames };
