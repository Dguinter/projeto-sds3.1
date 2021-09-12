import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DonutChart from "components/DonutChart/indesx";

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary py-3">Dashbord de vendas</h1>

      <div className= "row px-3">
        <div className= "col-sm-6">
          <h5 className= "text-center test-secondary">Taxa de sucesso (%)</h5>
          <BarChart/>
        </div>
        <div className= "col-sm-6">
          <h5 className= "text-center test-secondary">Todas as vendas</h5>
          <DonutChart/>
        </div>

        <div className="py-3"></div>
          <h2 className= "text-primary py-3">Todas vendas</h2>
      </div>

      <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
