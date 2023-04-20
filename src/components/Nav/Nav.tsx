import { store } from "../../store";
import { observer } from "mobx-react-lite";
import { NavDesktop } from "./components/NavDesktop/NavDesktop";
import { NavMobile } from "./components/NavMobile/NavMobile";
import { NavRoute, UserAuthStatus, UserState } from "../../types";
import { texts } from "../../texts";

export const Nav = observer(() => {
  const userState = store.getUserState();
  const routes = mapUserStateToRoutes(userState);

  return (
    <>
      <NavDesktop userState={userState} routes={routes} />
      <NavMobile userState={userState} routes={routes} />
    </>
  );
});

function mapUserStateToRoutes(userState: UserState): NavRoute[] {
  if (userState.status === UserAuthStatus.Authorized) {
    return texts.Navigation.authorized;
  }
  return texts.Navigation.unauthorized;
}
