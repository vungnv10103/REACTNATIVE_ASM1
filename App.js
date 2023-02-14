import { StyleSheet, Text, View, Image, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
import ManageStoreScreen from "./ManageStoreScreen";
import StoreList from "./StoreList";
import EditStore from "./EditStore";

const Stack = createNativeStackNavigator();
const HomeScreen = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: "https://picsum.photos/50" }} />

      <Button
        title="Quản Lí Cửa Hàng"
        onPress={() => nav.navigate("Manager Store")}
      />
      <Button
        title="Thông Tin Cá Nhân"
        onPress={() => nav.navigate("Personal Infomation")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StoreManager">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Personal Infomation" component={ProfileScreen} />
        <Stack.Screen name="Manager Store" component={ManageStoreScreen} />
        <Stack.Screen name="Add" component={StoreList} />
        <Stack.Screen name="Edit" component={EditStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
