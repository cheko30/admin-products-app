import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'products/new',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'products/:id/edit', //ROA - Resource-oriented-design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction,
            },
            {
                path: 'products/:id/delete', //ROA - Resource-oriented-design
                action: deleteProductAction,
            }
        ]
    }
])