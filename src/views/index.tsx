import { createRoot } from "react-dom/client";
import axios from "axios";
import { API_SERVER_URL } from "../public-config";
import App from '../components/app';


const container = document.getElementById("app");
const root = createRoot(container);

axios.get(`${API_SERVER_URL}/videos`).then((resp) => {
    console.log("resp:::", resp);
    root.render(<App initialData={{predictions: resp}} />);
})
