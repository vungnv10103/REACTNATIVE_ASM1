import { StyleSheet, View, Text, Image, Button } from "react-native";

const ProfileScreen = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 250,
          height: 100,
        }}
        source={{
          uri: "https://ap.poly.edu.vn/images/logo.png",
        }}
      />

      <Text>Họ và tên: Nguyễn Văn Vững</Text>
      <Text>Mã sinh viên: PH27864</Text>
      <Button
        title="Quản Lí Cửa Hàng"
        onPress={() => nav.navigate("Manager Store")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  picture: {
    height: 100,
    width: 100,
  },
});

export default ProfileScreen;
