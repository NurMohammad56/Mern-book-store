import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import Shop from "../pages/shop/Shop.jsx";
import About from "../pages/about/About.jsx";
import Blog from "../pages/blog/Blog.jsx";
import SingleBook from "../component/home/SingleBook.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[{
            path: "/",
            element: <Home/>,
        },
        {
            path: "/shop",
            element: <Shop/>,
        },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/books/:id",
                element: <SingleBook/>,
                loader: async ({ params }) => {
                    try {
                        const response = await fetch(`http://localhost:5000/api/v1/books/${params.id}`);
                        if (!response.ok) {
                            throw new Error("Book not found");
                        }
                        const data = await response.json();
                        console.log("Fetched data:", data);
                        return data;
                    } catch (error) {
                        console.error("Error loading book:", error);
                        return null;
                    }
                }
            }
        ],
    },
]);

export default  router