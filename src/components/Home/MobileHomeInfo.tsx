import { IonCard, IonCardTitle, IonRow, IonCol, IonCardContent, IonText } from '@ionic/react';

import tellU_splash from '../../assets/images/tellU_splash.png';
import tellU_home from '../../assets/images/tellU_home.png'
import tellU_home_1 from '../../assets/images/tellU_home_1.png'
import tellU_maps from '../../assets/images/tellU_maps.png';
import tellU_events from '../../assets/images/tellU_events.png';
import tellU_profile from '../../assets/images/tellU_profile.png';


const MobileHomeInfo: React.FC = () => {

  return (
    <IonCard className='mobile-home-info'>
      <IonCardContent>

        <div style={{ height: '1vh' }} />

        <section id='welcome'>
          <IonCardTitle style={{ fontSize: '4.75vw' }}> Welcome to the tellU app!</IonCardTitle>
          <br />
          <p style={{ fontSize: '3vw', marginRight: '5%' }}>
            The tellU app puts students into chat rooms with their fellow university students.
            Post about nearby campus events or sightings, or just chat with new friends!
            Let me tellU about some of the features of the app and some updates you can expect in the future.
          </p>
          <div className='img-wrapper'>
            <img src={tellU_splash} alt='tellU Splash Screen' />
          </div>
        </section>

        <br />

        <section id='post-types'>
          <IonCardTitle style={{ fontSize: '4.75vw' }}> Post Types </IonCardTitle>
          <br />
          <p style={{ fontSize: '3vw', marginRight: '5%' }}>
            When posting to the chat room, you can post images, GIFs, and polls! You can also select what type of post you are uploading.
            There are 8 options to choose from:
            <IonRow>
              <IonCol><IonText color='primary'>General</IonText></IonCol>
              <IonCol><IonText color='alert'>Alerts</IonText></IonCol>
              <IonCol><IonText color='sighting'>Sighting</IonText></IonCol>
              <IonCol><IonText color='buysell'>Buy/Sell</IonText></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonText color='event'>Events</IonText></IonCol>
              <IonCol><IonText color='research'>Research</IonText></IonCol>
              <IonCol><IonText color='housing'>Housing</IonText></IonCol>
              <IonCol><IonText color='dining'>Dining</IonText></IonCol>
            </IonRow>
          </p>
          <br />
          <IonRow>
            <IonCol>
              <div >
                <img src={tellU_home} alt='tellU Home Screen' />
              </div>
            </IonCol>
            <IonCol>
              <div>
                <img src={tellU_home_1} alt='tellU Home Screen with poll' />
              </div>
            </IonCol>
          </IonRow>
        </section>

        <br />

        <section id='map-pins'>
          <IonCardTitle style={{ fontSize: '4.75vw' }}> Map Pins </IonCardTitle>
          <br />
          <p style={{ fontSize: '3vw', marginRight: '5%' }}>
            You can choose to add a location pin to the MAPS tab when posting!
            You're able to see all the main POIs (places of interest) on the map,
            and you can click on them to see more information and posts that happened there.
          </p>
          <br />
          <div className='img-wrapper'>
            <img src={tellU_maps} alt='tellU Maps tab' />
          </div>
        </section>

        <br />

        <section id='events'>
          <IonCardTitle style={{ fontSize: '4.75vw' }}> Campus Events </IonCardTitle>
          <br />
          <p style={{ fontSize: '3vw', marginRight: '5%' }}>
            See the events going on around campus! You can see the event name, description, location, and time.
            You can also sort by month and share them with your friends.
          </p>
          <br />
          <div className='img-wrapper'>
            <img src={tellU_events} alt='tellU Events tab' />
          </div>
        </section>

        <br />

        <section id='profiles'>
          <IonCardTitle style={{ fontSize: '4.75vw' }}> Profiles </IonCardTitle>
          <br />
          <p style={{ fontSize: '3vw', marginRight: '5%' }}>
            Customize your profile! Upload your profile picture, add your other social medias and even include a featured song!
          </p>
          <br />
          <div className='img-wrapper'>
            <img src={tellU_profile} alt='tellU About User' />
          </div>
        </section>

        <br />

      </IonCardContent>
    </IonCard>
  );
};

export default MobileHomeInfo;