import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
  return (
    <>
      <Header/>
        
          

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
        <div className="border-2 bg-red-200 lg:col-span-3">A</div>
        <div className="border-2 bg-red-500">A</div>
        <div className="border-2 bg-red-500">A</div>
        <div className="border-2 bg-lime-400">B</div>
        <div className="border-2 bg-lime-400">B</div>
        <div className="border-2 bg-lime-400">B</div>
        <div className="border-2 bg-amber-300">C</div>
        <div className="border-2 bg-amber-300">C</div>
        <div className="border-2 bg-amber-300">C</div>
      </div>
      <Footer/>  
    </>
  );
}
