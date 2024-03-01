import { apiKey } from "./constants";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Home, Root, Error, SingleMovieDetail } from "./pages";

// loder import
import { loader as MovieLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route index element={<Home />} loader={MovieLoader} />
            <Route
                path="/detail/:imdbId"
                element={<SingleMovieDetail />}
                loader={SingleMovieLoader}
            />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
