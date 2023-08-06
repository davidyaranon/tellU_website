import { useRef, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, useIonViewDidEnter } from '@ionic/react';

import { useToast } from '@agney/ir-toast';

import Header from '../components/Shared/Header';
import { timeout } from '../components/Shared/Timeout';
import Footer from '../components/Shared/Footer';

import { sendPasswordReset } from '../fbConfig';



const ForgotPassword = () => {

  // hooks
  const Toast = useToast();

  const pageRef = useRef<HTMLIonContentElement | null>(null);
  useIonViewDidEnter(() => {
    pageRef.current && pageRef.current.scrollToTop();
  }, []);

  // state variables
  const [email, setEmail] = useState<string | number>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  /**
   * @description handles the reset password button click
   */
  const handleResetPassword = () => {
    setButtonDisabled(true);
    if (typeof email != 'string') {
      const toast = Toast.create({ message: 'Enter an email', duration: 2000, color: 'alert' });
      toast.present();
      setButtonDisabled(false);
      return;
    }
    if (email.trim().length <= 0) {
      const toast = Toast.create({ message: 'Enter an email', duration: 2000, color: 'alert' });
      toast.present();
      setButtonDisabled(false);
      return;
    }
    sendPasswordReset(email).then((res: boolean) => {
      if (res === true) {
        const toast = Toast.create({ message: 'Email sent! (Check your spam folder)', duration: 2000, color: 'success' });
        toast.present();
        toast.dismiss();
        setEmail('');
        timeout(1500).then(() => {
          setButtonDisabled(false);
        });
      } else {
        const toast = Toast.create({ message: 'Email not found, try again', duration: 2000, color: 'alert' });
        toast.present();
        setButtonDisabled(false);
      }
    })
  };

  return (
    <IonPage>

      <Header />

      <IonContent ref={pageRef}>

        <IonHeader style={{ padding: '5vh' }}>
          <p style={{ textAlign: 'center', fontSize: '1.5em', fontFamily: 'sans-serif' }}>Forgot Password</p>
        </IonHeader>

        {/* <IonLabel color='primary' className='login-label'>Email</IonLabel> */}
        <IonItem className='login-input'>
          <IonInput type='email' value={email} placeholder='Email' onIonChange={(e) => { setEmail(e.detail.value!); }} />
        </IonItem>
        <br />
        <IonButton className='login-button' disabled={buttonDisabled} onClick={() => { handleResetPassword(); }} fill='clear' expand='block' id='signInButton' >Send Password Reset</IonButton>

        <div style={{ height: '50vh' }} />

        <Footer selectedPage='forgot-password' />
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;