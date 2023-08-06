import { IonCard, IonCardContent, IonCardTitle, IonContent, IonPage } from "@ionic/react"
import Header from "../components/Shared/Header"
import Footer from "../components/Shared/Footer"

const Contact: React.FC = () => {
  return (
    <IonPage>
      <Header selectedPage='contact' />

      <IonContent>

        <IonCard>
          <IonCardContent>
            <IonCardTitle style={{ fontSize: "2rem" }}>Contact</IonCardTitle>
            <br />
            <p style={{ fontSize: '1.25rem', marginRight: '5%' }} >Email <a href="mailto:app.tellU@gmail.com">app.tellU@gmail.com</a> for any questions about tellU.</p>
          </IonCardContent>
        </IonCard>

        <div style={{height : "75vh"}} />

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Contact;