import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss"
import { Provider } from "react-redux";
import { store } from "./store/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
        <Provider store={store}>
            <App/>
        </Provider>
    </GoogleOAuthProvider>
)
