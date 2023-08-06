import { RouterDirection, UseIonRouterResult } from "@ionic/react";

export const dynamicNavigate = (router: UseIonRouterResult, path: string, direction: RouterDirection): void => {
  if (router.routeInfo.pathname === path) return;
  const action = direction === "forward" ? "push" : "pop";
  router.push(path, direction, action);
}