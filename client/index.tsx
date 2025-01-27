import * as React from "react";
import { registerRootComponent } from "expo";
import { LogBox } from "react-native";

// Ignore specific warnings if needed
LogBox.ignoreLogs(["Remote debugger"]);

import App from "./App";

registerRootComponent(App);

export default App;
