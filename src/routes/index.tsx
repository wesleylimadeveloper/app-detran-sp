import { NavigationContainer } from "@react-navigation/native";

import { Dashboard } from "./dashboard";

export function Routes() {
  return (
    <NavigationContainer>
      <Dashboard />
    </NavigationContainer>
  );
}
