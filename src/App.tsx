import LandingPage from './LandingPage';

function App() {
  const handleGoToApp = () => {
    // Redirige vers votre instance applicative 3D
    window.location.href = 'http://localhost:5173';
  };

  return <LandingPage onEnterApp={handleGoToApp} />;
}

export default App;