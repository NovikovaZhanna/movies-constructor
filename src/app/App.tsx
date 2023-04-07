import Layout from "../containers/Layout";
import "../lib/styles/scss/index.scss";
import "../lib/styles/css/index.css";
import IndexPage from "../pages/IndexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage";
import ContactsPage from "../pages/ContactsPage";
import SeriesPage from "src/pages/SeriesPage";

const router = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
];

function App({}) {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {router.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
