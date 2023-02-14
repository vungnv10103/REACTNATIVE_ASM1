import { StyleSheet, Text, FlatList, Button, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styless from "./style";

const StoreItem = (props) => {
  const item = props.data;
  const navigation = useNavigation();
  const itemBg = item.storeStatus == "Đóng cửa" ? styless.red : styless.green;

  return (
    <>
      <Image
        source={{ uri: "https://ap.poly.edu.vn/images/logo.png" }}
        style={styles.storeLogo}
      />
      <Text>Tên cửa hàng: {item.name}</Text>
      <Text>ID: {item.storeID}</Text>
      <Text>Địa chỉ: {item.address}</Text>
      <Text>Số điện thoại: {item.storePhoneNumber}</Text>

      <Text>
        Trạng thái: <Text style={[itemBg]}>{item.storeStatus}</Text>
      </Text>

      <Button title="Xóa" />
      <Button title="Sửa" onPress={() => navigation.navigate("Edit")} />
    </>
  );
};

const StoreList = (props) => {
  const list = props.data || {};

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <StoreItem data={item} />}
      keyExtractor={(item) => item.storeID}
    />
  );
};

const styles = StyleSheet.create({
  storeLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default StoreList;
