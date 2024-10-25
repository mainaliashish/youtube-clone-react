import { createBrowserRouter } from "react-router-dom";
import BodyComponent from "../components/BodyComponent";
import MainContainerComponent from '../components/MainContainerComponent';
import WatchPage from "../components/WatchPage";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <BodyComponent/>,
        children: [
            {
                path: "/",
                element: <MainContainerComponent/>,
            },
            {
                path: "watch",
                element: <WatchPage/>
            }
        ]
    }
])

export default appRouter;