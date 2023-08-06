import { IonContent, IonPage } from '@ionic/react';

import Header from '../components/Shared/Header';
import DesktopHomeInfo from '../components/Home/DesktopHomeInfo';
import MobileHomeInfo from '../components/Home/MobileHomeInfo';


const Home: React.FC = () => {

  return (
    <IonPage>

      <Header />

      <IonContent>

        { /* For viewing Home page on desktop and widescreen devices */}
        <DesktopHomeInfo />

        {/* For viewing Home page on mobile devices */}
        <MobileHomeInfo />

      </IonContent>
    </IonPage>
  )
};

export default Home;