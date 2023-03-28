const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import MobileDesign from "./screens/MobileDesign";
import ProfileUpdate from "./screens/ProfileUpdate";
import Nurses from "./screens/Nurses";
import Setting from "./screens/Setting";
import NursesList from "./screens/NursesList";
import CrechesList from "./screens/CrechesList";
import PhysicianList from "./screens/PhysicianList";
import AppointmentNow from "./screens/AppointmentNow";
import AllergistsImmunologistsList from "./screens/AllergistsImmunologistsList";
import DoctorList from "./screens/DoctorList";
import CategoriesList from "./screens/CategoriesList";
import LoginMedexpertz from "./screens/LoginMedexpertz";
import LoginAsPatient from "./screens/LoginAsPatient";
import DoctorSignup from "./screens/DoctorSignup";
import PatientSignup from "./screens/PatientSignup";
import PatientForm from "./screens/PatientForm";
import DoctorForm from "./screens/DoctorForm";
import DoctorSignup1 from "./screens/DoctorSignup1";
import PatientSignup2 from "./screens/PatientSignup2";
import PatientSignup1 from "./screens/PatientSignup1";
import DoctorLogin from "./screens/DoctorLogin";
import PatientLogin from "./screens/PatientLogin";
import SplashScreen from "./screens/SplashScreen";
import DoctorLogin1 from "./screens/DoctorLogin1";
import SearchResults from "./screens/SearchResults";
import SearchResults1 from "./screens/SearchResults1";
import Group4 from "./components/Group4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileDesign"
              component={MobileDesign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileUpdate"
              component={ProfileUpdate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nurses"
              component={Nurses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NursesList2"
              component={NursesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Creches"
              component={CrechesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chemist"
              component={PhysicianList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppointmentNow"
              component={AppointmentNow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllergistsImmunologistsList"
              component={AllergistsImmunologistsList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Doctor"
              component={DoctorList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoriesList"
              component={CategoriesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginMedexpertz"
              component={LoginMedexpertz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAsPatient"
              component={LoginAsPatient}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorSignup"
              component={DoctorSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientSignup"
              component={PatientSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientForm"
              component={PatientForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorForm"
              component={DoctorForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorSignup1"
              component={DoctorSignup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientSignup2"
              component={PatientSignup2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientSignup1"
              component={PatientSignup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorLogin"
              component={DoctorLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientLogin"
              component={PatientLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorLogin1"
              component={DoctorLogin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={(props) => ({
                headerShown: true,
                header: () => <Group4 />,
              })}
            />
            <Stack.Screen
              name="SearchResults1"
              component={SearchResults1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
