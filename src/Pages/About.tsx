import { IonCard, IonCardContent, IonCardTitle, IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import Header from "../components/Shared/Header";
import { useRef } from "react";
import Footer from "../components/Shared/Footer";


const About: React.FC = () => {

  const pageRef = useRef<HTMLIonContentElement | null>(null);
  useIonViewDidEnter(() => {
    pageRef.current && pageRef.current.scrollToTop();
  }, []);

  return (
    <IonPage ref={pageRef}>

      <Header selectedPage="about" />

      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonCardTitle style={{ fontSize: "2rem" }}>About</IonCardTitle>
            <br />
            <p style={{ fontSize: '1.25rem', marginRight: '5%' }}>The tellU app was originally made for Cal Poly Humboldt students to post about school events and other campus related
              activities, becoming a one-stop digital hub for all things related to the university life. <br /> <br />It was made to be anonymous so anyone can post their true feelings about the school.
              tellU will hopefully continue to grow so that students will want to share academic resources, promote clubs and organizations, discuss topics of interest (like the housing crisis), and even coordinate social events. <br /> <br />With tellU, students can stay up-to-date with the latest news from their campus, connect with peers, and engage in enriching discussions, thus enhancing their college experience.
              tellU is now available at UC Davis and UC Berkeley.
            </p>
          </IonCardContent>
        </IonCard>

        <div style={{ height: "50vh" }} />

        <Footer />

      </IonContent>
    </IonPage>
  );
};

export default About;