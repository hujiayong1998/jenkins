import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  // {
  //   name: "main-app", // app name registered
  //   entry: "http://localhost:5173",
  //   container: "#main-app",
  //   activeRule: "/main-app",
  // },
  {
    name: "react-app",
    entry: "http://localhost:3003/",
    container: "#react",
    activeRule: "/react",
  },
]);

start();
