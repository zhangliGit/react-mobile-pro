import { observable, action } from "mobx";
let appState = observable({ timer: 0 });

export default appState;