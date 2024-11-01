import './App.css'
import Header from './Component/Header/Header'

import Indivdual from './Component/Signup_signin/Indivdual';
import Nextdate from './Component/Signup_signin/Next date';
// import Signin from './Component/Signup_signin/Signin';
import { Routes,Route } from 'react-router-dom';
// import Teleregi from './Component/Signup_signin/Teleregi';
import Asindiviual from './Component/contactus/Asindiviual';
import Registerasorganastion from './Component/contactus/Registerasorganastion';
import Dashboarful from './Component/Dashboardfull/Dashboarful';
import Indivdualdash from './Component/Dashboard/Indivualdash';
import Registerstaff from './Component/Dashboard/Registerstaff';
import Regesindivual from './Component/Dashboard/Regesindivual';
import RidaNextRI from './Component/Dashboard/RidaNextRI';
import Nextindivual from './Component/Dashboard/Regasinnext';
import City from './Component/Dashboard/City';
import Teleregi from './Component/Dashboard/Residence';
import NotFound from './Component/Fou404page/F404page';
import Rasorg from './Component/Dashboard/Rasorg';
import Regesterstaff from './Component/Signup_signin/registerstaff';
import Registersion from './Component/Dashboard/Registerstaff';
import Nextstaff from './Component/Dashboard/Registerstaffnext';
import Staffsubmit from './Component/Dashboard/Staffsubmit';
import Hospitailrgtr from './Component/Dashboard/Hospitalregtr';
import Donerrgtr from './Component/Dashboard/Donerregister';
import Mixdtnav from './Component/Dashboard/Mixdtnav';
import MixHnav from './Component/Dashboard/MixHnav';
import MixHoPN from './Component/Dashboard/MixHoPN';
import MixLN from './Component/Dashboard/MixLN';
import MixStoreN from './Component/Dashboard/MixStoreN';
import MixsyNav from './Component/Dashboard/MixsyNav';
import Healthcondion from './Component/Health/Healthcondion';
function App() {
  return (
    <>
<Routes>
{/* Dashboard  start*/}
<Route path="/Dashboard" element={<Dashboarful/>} />
<Route path="/Labratory" element={<Mixdtnav/>} />
<Route path="/dashbod" element={<MixHnav/>} />
<Route path="/Labr1" element={<MixHoPN/>} />
<Route path="/Labr12" element={<MixLN/>} />
<Route path="/Labr32" element={< MixStoreN/>} />
<Route path="/Labr42" element={<MixsyNav/>} /> 
<Route path="/Labr22" element={<Healthcondion/>} />
{/* dashboard end */}
         <Route path="/" element={<Header />} />
         <Route path="/Register" element={  <Indivdualdash/>} />
         <Route path="/hh" element={  <Registerstaff/>} />
         <Route path="/registerindivual" element={  <Regesindivual/>} />
         <Route path="/Nextindivual" element={  <Nextindivual/>} />
         <Route path="/email" element={  <RidaNextRI/>} /> 
        <Route path="/Formin" element={<Indivdual/>} />
        <Route path="/ForminNext" element={<Nextdate/>} />
        <Route path="/cityF" element={ < City/>} />
        <Route path="/citynex" element={ <Teleregi/>} />
        <Route path="/citylast" element={ <Asindiviual/>} />
        <Route path="/regsterorganation" element={ <Rasorg/>} />
        <Route path="/Rigesterorg" element={ <Registerasorganastion/>} />
        <Route path="*" element={<NotFound/>} />
         <Route path="/regsterstaff" element={ < Regesterstaff/>} /> 
         <Route path="/registerion" element={ < Registersion/>} />
         <Route path="/Nextstaff" element={ <  Nextstaff/>} />
         <Route path="/Staffsubmit" element={ < Staffsubmit/>} />
         <Route path="/hostpitalsubmit" element={ <Hospitailrgtr/>} />
          <Route path="/Donersubmit" element={ <Donerrgtr/>} />
      </Routes>
    </>
  )
}

export default App;