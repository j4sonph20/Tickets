
import Main from "./BT-DatVe/Main";
// import Main from "./Create-Code-Products/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Movie/modules/Home";
import Details from "./Movie/modules/Details";
import NotFound from "./Movie/components/NotFound";
import MainLayout from "./Movie/layouts/MainLayout";

function App() {
  return (
    // <Home/>
    // <GlassesApp/>
    // <Main/>
    <Main/>
   
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<MainLayout/>}>
    //       <Route index element={<Home />} />
    //       <Route path="movies/:movieId" element={<Details />} />
    //       {/* <Route path="tickets/:showtimeId" element={<Tickets/>}/> */}
    //     </Route>

    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
