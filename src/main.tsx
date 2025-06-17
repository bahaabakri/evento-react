import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss"
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
