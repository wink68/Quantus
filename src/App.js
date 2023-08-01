import Router from './Router';
import GlobalStyle from './GlobalStyle';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
