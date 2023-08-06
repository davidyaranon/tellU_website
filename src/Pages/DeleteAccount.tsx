import { useRef, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, useIonViewDidEnter } from '@ionic/react';

import { useToast } from '@agney/ir-toast';
import Header from '../components/Shared/Header';
import { Dialog } from '@capacitor/dialog';
import { deleteUserDataAndAccount } from '../fbConfig';
import Footer from '../components/Shared/Footer';

// global variables

export const DeleteAccount = () => {

  // hooks
  const Toast = useToast();
  const pageRef = useRef<HTMLIonContentElement | null>(null);
  useIonViewDidEnter(() => {
    pageRef.current && pageRef.current.scrollToTop();
  }, []);

  // state variables
  const [email, setEmail] = useState<string | number>('');
  const [password, setPassword] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const handleDeleteAccount = async () => {
    if (!email) {
      const toast = Toast.create({ message: 'Email not found, try again', duration: 2000, color: 'alert' });
      toast.present();
      return;
    }
    if (!password) {
      const toast = Toast.create({ message: 'Enter a password', duration: 2000, color: 'alert' });
      toast.present();
      return;
    }
    const { value } = await Dialog.confirm({
      title: 'Delete Account',
      message: `Are you sure you want to delete your account?`,
      okButtonTitle: 'Delete my account'
    });
    if (!value) { return; }
    const areYouSure = await Dialog.confirm({
      title: 'Delete Account',
      message: `Are you REALLY sure you want to delete your account?`,
      okButtonTitle: 'Delete my account'
    });
    if (!areYouSure.value) { return; }
    setButtonDisabled(true);
    const res = await deleteUserDataAndAccount(email.toString(), password);
    if (typeof res === 'string') {
      const toast = Toast.create({ message: res, duration: 2000, color: 'alert' });
      toast.present();
    } else {
      Toast.success('Account deleted! Sorry you had to go :(');
    }
    setButtonDisabled(false);
  };

  return (
    <IonPage>

      <Header />

      <IonContent ref={pageRef}>

        <IonHeader className='ion-no-border' style={{ padding: '5vh' }}>
          <p style={{ textAlign: 'center', fontSize: '1.5em', fontFamily: 'sans-serif' }}>Delete Account</p>
        </IonHeader>

        <p className='ion-text-center' style={{ paddingLeft: '15%', paddingRight: '15%' }}>Enter your email and password to delete your tellU account. All user posts will be deleted. No emails/passwords are saved. There is no account recovery once deleted. You can also delete your account within the tellU app.</p>

        <br />

        <IonItem className='login-input'>
          <IonInput type='email' value={email} placeholder='Email' onIonChange={(e) => { setEmail(e.detail.value!); }} />
        </IonItem>
        <br />
        <IonItem className='login-input'>
          <IonInput type='password' value={password} placeholder='Password' onIonChange={(e) => { setPassword(e.detail.value!); }} />
        </IonItem>
        <br />
        <IonButton className='delete-account-button' disabled={buttonDisabled} onClick={() => { handleDeleteAccount(); }} fill='clear' expand='block' id='signInButton' >Delete Account</IonButton>

        <div style={{ height: "25vh" }} />

        <Footer selectedPage='delete-account' />

      </IonContent>
    </IonPage>
  );
};