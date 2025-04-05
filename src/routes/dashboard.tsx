import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { DashboardTab } from "./dashboard-tab";
import { MyVehicles } from "../screens/MyVehicles";
import { TraficTicket } from "../screens/TrafficTicket";
import { Points } from "../screens/Points";
import { MyDetran } from "../screens/MyDetran";

export function Dashboard() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="DashboardTab" component={DashboardTab} />
      <Screen name="MyVehicles" component={MyVehicles} />
      <Screen name="TraficTicket" component={TraficTicket} />
      <Screen name="Points" component={Points} />
      <Screen name="MyDetran" component={MyDetran} />
    </Navigator>
  );
}
