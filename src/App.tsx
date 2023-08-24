import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Route, Redirect } from 'react-router';
import Home from './pages/Home';
import Menu from './components/Menu/Menu';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import { ToastProvider } from '@agney/ir-toast';
import { DeleteAccount } from './pages/DeleteAccount';
import Contact from './pages/Contact';
import QrRedirect from './pages/QrRedirect';

setupIonicReact({ mode: 'ios', swipeBackEnabled:true });

const App: React.FC = () => (
  <IonApp>
    <ToastProvider>

      <IonReactRouter>

        <IonSplitPane hidden contentId='main'>

          <Menu />

          <IonRouterOutlet id='main' animated={false}>

            <Route path='/' exact={true}>
              <Redirect to='/home' />
            </Route>

            <Route path='/home' exact={true}>
              <Home />
            </Route>

            <Route path='/about' exact={true}>
              <About />
            </Route>

            <Route path='/contact' exact={true}>
              <Contact />
            </Route>


            <Route path='/terms-and-conditions' exact={true}>
              <TermsAndConditions />
            </Route>

            <Route path='/privacy-policy' exact={true}>
              <PrivacyPolicy />
            </Route>

            <Route path='/forgot-password' exact={true}>
              <ForgotPassword />
            </Route>

            <Route path='/delete-account' exact={true}>
              <DeleteAccount />
            </Route>

            <Route path='/qr-redirect' exact={true}>
              <QrRedirect />
            </Route>

            <Route component={Home} />

          </IonRouterOutlet>

        </IonSplitPane>

      </IonReactRouter>

    </ToastProvider>
  </IonApp>
);

export default App;
