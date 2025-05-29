import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Changelogs from "./pages/Changelogs";
import Community from "./pages/Community";
import DocsLayout from "./layouts/DocsLayout";
import Docs from "./pages/Docs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "changelogs",
                element: <Changelogs />
            },
            {
                path: "community",
                element: <Community />
            },
            {
                path: "docs",
                element: <DocsLayout />,
                children: [
                    {
                        path: "",
                        element: <Docs />
                    }
                ]
            }
        ]
    }
])

export default router;