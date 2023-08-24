import { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, useIonRouter } from '@ionic/react';
import tellU_black from '../../Assets/Images/tellU_black.png';
import tellU_white from '../../Assets/Images/tellU_white.png';
import { dynamicNavigate } from './Navigation';

interface HeaderProps {
  selectedPage?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const { selectedPage } = props;

  const router = useIonRouter();

  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const changeHandler = () => setIsDarkMode(mediaQuery.matches);

      mediaQuery.addEventListener('change', changeHandler);
      return () => mediaQuery.removeEventListener('change', changeHandler);
    }
  }, []);

  return (
    <IonHeader className='ion-no-border' style={{ padding: '5px' }} >
      <IonToolbar style={{ display: 'flex', '--background': 'transparent' }}>

        {/* Hamburger button that appears when the screen width is smaller than 768px */}
        <IonButtons slot='start'>
          <IonMenuButton className='ion-menu-button' style={{ marginTop: '15%' }}></IonMenuButton>
        </IonButtons>

        {/* Always show logo at right end of screen */}
        <IonButton fill='clear' slot='end'>
          <img className='logo' src={isDarkMode ? tellU_white : tellU_black} onClick={() => dynamicNavigate(router, '/home', 'forward')} />
        </IonButton>

        { /* Only show the title if the screen width is greater than 768px */}
        <div className='header-info'>
          <IonRow style={{ paddingLeft: '5vw' }}>
            <IonCol size='1.5'>
              <IonButton style={selectedPage === 'home' ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => dynamicNavigate(router, '/home', 'forward')}>
                Home
              </IonButton>
            </IonCol>
            <IonCol size='1.5' >
              <IonButton style={selectedPage === 'about' ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => dynamicNavigate(router, '/about', 'forward')}>
                About
              </IonButton>
            </IonCol>
            <IonCol size='1.5'>
              <IonButton style={selectedPage === 'contact' ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => dynamicNavigate(router, '/contact', 'forward')}>
                Contact
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

      </IonToolbar>
    </IonHeader >
  );
};

export default Header;