import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact>Menu</Route>
          <Route path='/location'>location</Route>
          <Route path='/about' >About</Route>
          <Route path='/contact' >Contact</Route>
        </Routes>
        <Content />
      </Router>
    </>
  )

}
export default App;