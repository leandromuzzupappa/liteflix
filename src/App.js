import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Layouts
import HomeLayout from './layouts/HomeLayout';
import AccountLayout from './layouts/AccountLayout';
import NotFoundLayout from './layouts/NotFoundLayout';

// Pages
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Header from './components/Header';

function App() {
    return (
        <Router>
            <>
                <Header />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <HomeLayout>
                                <HomePage />
                            </HomeLayout>
                        )}
                    />

                    <Route
                        path="/user/my-list"
                        render={() => (
                            <AccountLayout>
                                <AccountPage />
                            </AccountLayout>
                        )}
                    />

                    <Route
                        path="/404"
                        render={() => (
                            <NotFoundLayout>
                                <NotFoundPage />
                            </NotFoundLayout>
                        )}
                    />

                    <Route path="*" render={() => <Redirect to="404" />} />
                </Switch>
            </>
        </Router>
    );
}

export default App;
