import { useStore } from "react-redux";

import rootReducer from "./reducers/index";

const store = useStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__WEB_VITALS_POLYFILL__);

export default store;