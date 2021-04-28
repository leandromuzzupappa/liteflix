// Layouts
import HomeLayout from './layouts/HomeLayout';

// Pages
import HomePage from './pages/HomePage';

// Components
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />

            <HomeLayout>
                <HomePage />
            </HomeLayout>
        </>
    );
}

export default App;
