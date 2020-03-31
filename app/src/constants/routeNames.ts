interface RouteNamesBase {
  index: string;
  dating: string;
}

export interface RouteNames {
  main: RouteNamesBase;
}

const routeNames: RouteNames = {
  main: {
    index: "MainScreen",
    dating: "DatingScreen",
  },
};

export { routeNames };
