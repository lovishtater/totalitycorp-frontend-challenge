import './App.css';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';
import News from './component/News/News';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <Sidebar />
        <Feed />
        <News />
      </div>
    </div>
  );
}

