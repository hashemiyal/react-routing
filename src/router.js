import { Route,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/Layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import HelpLayout from "./pages/help/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import CareersLayout from "./pages/careers/CareersLayout";
import Careers from "./pages/careers/Careers";
import Notfound from "./pages/Notfound";
import { careersLoader } from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import {CareerDetailsLoader} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareersError";
import {handleSubmit} from './pages/help/Contact'
export  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpLayout />}>
          <Route path='faq' element={<Faq/>}/>
          <Route path='contact' element={<Contact/>} action={handleSubmit}/>
          </Route>
          <Route path='careers' element={<CareersLayout/>} errorElement={<CareerError/>}>
           <Route index  element={<Careers/>} loader={careersLoader} />
           <Route path=":id" element={<CareerDetails/>} loader={CareerDetailsLoader}/>
          </Route>
          <Route path='*' element={<Notfound/>}/>
        </Route>
    )
  );