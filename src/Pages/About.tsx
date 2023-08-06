import { IonContent, IonPage } from "@ionic/react";
import Header from "../components/Shared/Header";


const About: React.FC = () => {
  return (
    <IonPage>

      <Header selectedPage="about" />

      <IonContent>
        <p>ABOUT</p>

      </IonContent>
    </IonPage>
  );
};

export default About;