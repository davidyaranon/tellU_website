import { IonPage, useIonRouter } from "@ionic/react";
import { useEffect } from "react"
import { dynamicNavigate } from "../components/Shared/Navigation";

const QrRedirect = () => {

  const router = useIonRouter();

  useEffect(() => {
    if (/android/i.test(navigator.userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.tellU.v3.quantum";
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.location.href = "https://apps.apple.com/us/app/tellu/id6443764288?ign-itscg=30200&ign-itsct=apps_box_link";
    }

    dynamicNavigate(router, "/home", 'forward');

  }, []);

  return <IonPage></IonPage>

};

export default QrRedirect;