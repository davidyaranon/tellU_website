import { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonRow, IonCol, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import tellU_black from '../../Assets/Images/tellU_black.png';
import tellU_white from '../../Assets/Images/tellU_white.png';

const Header: React.FC = () => {

  const history = useHistory();

  const handleNavBarClick = (route: string): void => {
    if (window.location.href.includes(route)) return;
    history.push(route);
  };

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
    <IonHeader className='ion-no-border' style={{ padding: '5px' }} translucent>
      <IonToolbar style={{ display: 'flex', alignItems: 'center', '--background': 'transparent' }}>

        {/* Hamburger button that appears when the screen width is smaller than 768px */}
        <IonButtons slot='start'>
          <IonMenuButton className='ion-menu-button' style={{ marginTop: '15%' }}></IonMenuButton>
        </IonButtons>

        {/* Always show logo at right end of screen */}
        <IonButton fill='clear' slot='end'>
          <img className='logo' src={isDarkMode ? tellU_white : tellU_black} />
        </IonButton>

        { /* Only show the title if the screen width is greater than 768px */}
        <div className='header-info'>
          <IonRow style={{ paddingLeft: '5vw' }}>
            <IonCol size='1.5'>
              <IonButton style={window.location.href.includes('home') ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => handleNavBarClick('/home')}>
                Home
              </IonButton>
            </IonCol>
            <IonCol size='1.5' >
              <IonButton style={window.location.href.includes('about') ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => handleNavBarClick('/about')}>
                About
              </IonButton>
            </IonCol>
            <IonCol size='1.5'>
              <IonButton style={window.location.href.includes('contact') ? { fontWeight: 'bold' } : {}} fill='clear' onClick={() => handleNavBarClick('/contact')}>
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