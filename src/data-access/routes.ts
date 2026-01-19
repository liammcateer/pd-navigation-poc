import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type Route<Name = string, Params = undefined> = Params extends undefined
  ? { name: Name }
  : { name: Name; params: Params };

type ReviewsRoute = Route<'reviews'>;

type RoomDetailsRoute = Route<'roomDetails', { roomId: string }>;

export type PropertyDetailsRoute = ReviewsRoute | RoomDetailsRoute;

const routeAtom = atom<PropertyDetailsRoute>();

export const usePropertyDetailsRoutes = () => {
  const [route, setRoute] = useAtom(routeAtom);

  const changeRoute = (newRoute: PropertyDetailsRoute) => {
    setRoute(newRoute);
    window.history.pushState({ route: newRoute }, '');
  };

  useEffect(() => {
    const syncRouteFromHistory = () => {
      const { route } = window.history.state;
      setRoute(route);
    };

    syncRouteFromHistory();

    window.addEventListener('popstate', syncRouteFromHistory);

    return () => {
      window.removeEventListener('popstate', syncRouteFromHistory);
    };
  }, [setRoute]);

  return { route, changeRoute };
};
