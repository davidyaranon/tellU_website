import { IonContent, IonPage, useIonViewDidEnter } from '@ionic/react';

import Header from '../components/Shared/Header';
import DesktopHomeInfo from '../components/Home/DesktopHomeInfo';
import MobileHomeInfo from '../components/Home/MobileHomeInfo';
import Footer from '../components/Shared/Footer';
import { useRef } from 'react';


const Home: React.FC = () => {

  /**
   * Used to scroll to the top of the page whenever it loads.
   */
  const homePageRef = useRef<HTMLIonContentElement | null>(null);
  useIonViewDidEnter(() => {
    homePageRef.current && homePageRef.current.scrollToTop();
  }, []);

  return (
    <IonPage>

      <Header selectedPage='home'/>

      <IonContent ref={homePageRef}>

        { /* For viewing Home page on desktop and widescreen devices */}
        <DesktopHomeInfo />

        {/* For viewing Home page on mobile devices */}
        <MobileHomeInfo />

        <Footer />

      </IonContent>

    </IonPage>
  )
};

export default Home;