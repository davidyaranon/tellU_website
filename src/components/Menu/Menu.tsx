/**
 * @file Menu.tsx
 * @fileoverview Menu component. This component is used to display the menu on the left hand side of the app.
 * It contains the links to the different pages of the app, as well as other labels
 */

{ /* Ionic / React */ }
import React, { useState } from 'react';
import {
  IonContent, IonIcon, IonItem,
  IonLabel, IonList, IonMenu,
  IonMenuToggle,
  useIonRouter
} from '@ionic/react';

{ /* Helpers */ }
import { AppPage, appPages } from './MenuFunctions';

{ /* Styles */ }
import '../../App.css';
import { useHistory } from 'react-router';
import { dynamicNavigate } from '../Shared/Navigation';

const Menu: React.FC = () => {

  const router = useIonRouter();
  /**
   * @description This function returns the router link of the app page.
   * 
   * @param {AppPage} appPage the app page to get the router link of
   */
  const handleClick = (appPage: AppPage): void => {
    if (window.location.href.includes(appPage.url)) { return; }
    if (appPage.redirect) { window.location.href = appPage.url; return; }
    dynamicNavigate(router, appPage.url, 'forward');
  }

  return (
    <IonMenu className='ion-menu' contentId='main' type='overlay' swipeGesture={false}>
      <IonContent style={{ '--background': 'var(--ion-color-menu-background' }}>

        {/* Page nav links */}
        <IonList id='routing-list' style={{ background: 'var(--ion-color-menu-background' }}>

          {appPages.map((appPage: AppPage, index: number) => {
            const isSelected = appPage.url === window.location.pathname;
            return (
              <React.Fragment key={appPage.url + index}>
                <IonMenuToggle autoHide={false}>
                  <IonItem color='menu-background' button className={`menu-item ${isSelected ? 'selected' : ''}`} onClick={() => handleClick(appPage)} routerDirection='none' lines='none' detail={false}>
                    <IonIcon color={isSelected ? 'primary' : 'dark'} aria-hidden='true' slot='start' ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel color={isSelected ? 'primary' : 'dark'} style={{ fontWeight: '500' }}>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
                {appPage.lineBreak && <br />}
              </React.Fragment>
            );
          })}

        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
