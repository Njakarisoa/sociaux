import { useState, useCallback } from 'react';
import Login from './pages/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import BottomNav from './components/BottomNav.jsx';
import Feed from './pages/Feed.jsx';
import Profile from './pages/Profile.jsx';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState('feed'); // 'feed' | 'profile'
  const [navExpanded, setNavExpanded] = useState(false);

  const handleLoginSuccess = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setActiveView('feed');
  }, []);

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className={`app-shell ${navExpanded ? 'app-shell--nav-expanded' : ''}`}>
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        expanded={navExpanded}
        onToggleExpand={() => setNavExpanded((prev) => !prev)}
        onLogout={handleLogout}
      />

      <div className="app-main">
        <TopBar
          activeView={activeView}
          onNavigate={setActiveView}
          onLogout={handleLogout}
        />

        <main className="app-content">
          {activeView === 'feed' ? <Feed /> : <Profile />}
        </main>
      </div>

      <BottomNav activeView={activeView} onNavigate={setActiveView} />
    </div>
  );
}

export default App;
