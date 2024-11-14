import Announcement from "./components/Announcement";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import GitbookAi from "./components/GitbookAi";
import GitSync from "./components/GitSync";
import HeroPage from "./components/HeroPage";
import Integrations from "./components/Integrations";
import InternalDocs from "./components/InternalDocs";
import Navbar from "./components/Navbar";
import PublicDocs from "./components/PublicDocs";
import VisitorAuthentication from "./components/VisitorAuthentication";

const App = () => {
  return (
    <main className='content-grid'>
      <Announcement />
      <Navbar />
      <HeroPage />
      <PublicDocs />
      <InternalDocs />
      <GitSync />
      <GitbookAi />
      <VisitorAuthentication />
      <Integrations />
      <Customers />
      <GetStarted />
      <Footer />
    </main>
  );
};
export default App;
