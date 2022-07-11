import Header from "./Components/Header/Header";
import ProductSection from "./Components/ProductSection/ProductSection";

function App() {
  return (
    <>
      <div className=" overflow-auto h-[100vh]">
        <Header></Header>
        <ProductSection></ProductSection>
      </div>
    </>
  );
}

export default App;
