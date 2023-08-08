import { IonButton, IonCol, IonFooter, IonRow, useIonRouter } from "@ionic/react";
import app_store from '../../assets/images/app_store.svg';
import google_play from '../../assets/images/google-play-badge.png';
import { dynamicNavigate } from "./Navigation";

interface FooterProps {
  selectedPage?: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {

  const { selectedPage } = props;

  const router = useIonRouter();

  return (
    <IonFooter>
      <div className='ion-text-center' style={{ fontWeight: "450", fontSize: "1rem" }}>Download Now</div>
      <br />
      <IonRow style={{ padding: "1%" }}>
        <IonCol className='ion-text-right'>
          <img src={app_store} alt='iOS App Store logo' className='store-logo' onClick={() => { window.open("https://apps.apple.com/us/app/tellu/id6443764288?ign-itscg=30200&ign-itsct=apps_box_link", '_blank') }} />
        </IonCol>
        <IonCol size=".5"></IonCol>
        <IonCol className='ion-text-left'>
          <img src={google_play} alt='Google Play Store logo' className='store-logo' style={{ scale: "1.25", transform: 'translateY(-5%)' }} onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.tellU.v3.quantum", '_blank') }} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className='ion-text-center' style={{ fontSize: "0.75rem" }}>
          Copyright © 2023 | tellU | All Rights Reserved
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className='ion-text-center'>
          <IonButton style={selectedPage === 'privacy-policy' ? { fontWeight: 'bold', fontSize: "0.9rem" } : { fontSize: "0.9rem" }} fill='clear' onClick={() => dynamicNavigate(router, '/privacy-policy', 'forward')}>Privacy Policy</IonButton>
        </IonCol>
        <IonCol className='ion-text-center'>
          <IonButton style={selectedPage === 'terms-and-conditions' ? { fontWeight: 'bold', fontSize: "0.9rem" } : { fontSize: "0.9rem" }} fill='clear' onClick={() => dynamicNavigate(router, '/terms-and-conditions', 'forward')}>Terms and Conditions</IonButton>
        </IonCol>
        <IonCol className='ion-text-center'>
          <IonButton color='sighting' style={selectedPage === 'forgot-password' ? { fontWeight: 'bold', fontSize: "0.9rem" } : { fontSize: "0.9rem" }} fill='clear' onClick={() => dynamicNavigate(router, '/forgot-password', 'forward')}>Forgot Password</IonButton>
        </IonCol>
        <IonCol className='ion-text-center'>
          <IonButton color='alert' style={selectedPage === 'delete-account' ? { fontWeight: 'bold', fontSize: "0.9rem" } : { fontSize: "0.9rem" }} fill='clear' onClick={() => dynamicNavigate(router, '/delete-account', 'forward')}>Delete Account</IonButton>
        </IonCol>
      </IonRow>
      <br />
    </IonFooter>
  );
};

export default Footer;