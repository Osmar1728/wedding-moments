import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTabsLayout } from "./layouts/MainTabsLayout";
import { Icon, IconButton, useTheme } from "react-native-paper";
import { DrawerLayout } from "./layouts/DrawerLayout";
import { DrawerParamList, RootStackParamList } from "./navigation.types";
import { useMemo, useCallback } from "react";
import ProfileScreen from "../screens/ui/Profile All/Profile";
import QRCodeScreen from "../screens/ui/qr/QRCodeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfileScreen from "../screens/ui/Profile All/EditProfile";
import { NavigationContainer } from "@react-navigation/native";
import QuestionScreen from "../screens/ui/Profile All/Questions";
import InfoScreen from "../screens/ui/Profile All/Info";


const Drawer = createDrawerNavigator<DrawerParamList>();

const ICON_SIZE = 24;
const DRAWER_ICONS = {
  home: "home",
  profile: "account",
  guests: "account-multiple",
  qr: "qrcode",
  events: "party-popper",
} as const;

export const RootStack = () => {
  const { colors } = useTheme();

  const screenOptions = useMemo(
    () => ({
      drawerLabelStyle: { color: "black" },
      drawerActiveBackgroundColor: colors.primaryContainer,
      drawerType: "front",
      drawerHideStatusBarOnOpen: true,
      sceneStyle: { backgroundColor: "white" },
      headerShadowVisible: false,
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }),
    [colors.primaryContainer]
  );

  const renderDrawerIcon = useCallback(
    (iconName: keyof typeof DRAWER_ICONS) => {
      return () => <Icon source={DRAWER_ICONS[iconName]} size={ICON_SIZE} />;
    },
    []
  );

  const handleActionPress = useCallback(() => {
    // Implementar la lógica necesaria aquí
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Drawer.Navigator
      screenOptions={screenOptions as any}
      drawerContent={(props) => <DrawerLayout props={props} />}
    >
      <Drawer.Screen
        options={{
          drawerIcon: renderDrawerIcon("home"),
          title: "Inicio",
        }}
        name="Tabs"
        component={MainTabsLayout}
      />

      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: renderDrawerIcon("profile"),
          title: "Perfil",
        }}
      />

      <Drawer.Screen
        name="Invitados"
        component={() => null}
        options={{
          headerSearchBarOptions: {
            placeholder: "Buscar",
          },
          drawerIcon: renderDrawerIcon("guests"),
          title: "Invitados",
        }}
      />

      <Drawer.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{
          headerRight: () => (
            <IconButton icon="share-variant" onPress={handleActionPress} />
          ),
          drawerIcon: renderDrawerIcon("qr"),
          title: "Invitación QR",
        }}
      />

      <Drawer.Screen
        name="Eventos"
        component={() => null}
        options={{
          headerRight: () => (
            <IconButton icon="plus" onPress={handleActionPress} />
          ),
          drawerIcon: renderDrawerIcon("events"),
          title: "Mis Eventos",
        }}
      />

      <Stack.Screen
        name="EditarPerfil"
        component={EditProfileScreen}
        options={{
          headerTitle: "Editar Perfil",
          headerBackTitle: "Atrás"
        }}
      />
      <Stack.Screen
        name="Questions"
        component={QuestionScreen}
        options={{
          headerTitle: "Preguntas Frecuentes",
          headerBackTitle: "Atrás"
        }}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{
          headerTitle: "Politicas de privacidad",
          headerBackTitle: "Atrás"
        }}
      />

    </Drawer.Navigator>
  );
};
