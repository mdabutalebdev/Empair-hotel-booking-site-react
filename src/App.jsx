import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import RootLayout from "./components/layouts/RootLayout";
import SearchResult from "./pages/SearchResult";
import TourDetail from "./pages/TourDetail";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/search-result" element={<SearchResult/>}/>
        <Route path="/tour-detail" element={<TourDetail/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Route>
));

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
