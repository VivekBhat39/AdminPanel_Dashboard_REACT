import './App.css';
import Main from './components/Main';
import './main.css'
import './assets/scripts/main'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import TechnicalSupport from './components/TechnicalSupport';
import ChartCard from './components/ChartCard';
import DynamicTables from './components/DynamicTables';
import TaskAndChatbox from './components/TaskAndChatbox';
import TotalOrders from './components/TotalOrders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/dashboards' element={<AnalyticsDashboard />}>
            <Route path='/dashboards/technicalsupport' element={<TechnicalSupport />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <Header />
      <Sidebar />
      <AnalyticsDashboard />
      <TechnicalSupport />
      <ChartCard />
      <DynamicTables />
      <TaskAndChatbox />
      <TotalOrders /> 
      <Main/>
      <Footer /> */}
    </div>
  );
}

export default App;
