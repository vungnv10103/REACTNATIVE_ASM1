import { StyleSheet, View, Text, Button } from "react-native";
import StoreList from "./StoreList";

const ManageStoreScreen = (props) => {
  const nav = props.navigation;

  const list = [
    {
      storeID: 1,
      name: "Cơm gà",
      address: "Cổ nhuế Hà Nội",
      storePhoneNumber: "0123456789",
      storeStatus: "Hoạt động",
    },
    {
      storeID: 2,
      name: "Trà sữa",
      address: "Cổ nhuế Hà Nội",
      storePhoneNumber: "0123456789",
      storeStatus: "Hoạt động",
    },
    {
      storeID: 3,
      name: "Phở bò",
      address: "Cổ nhuế Hà Nội",
      storePhoneNumber: "0123456789",
      storeStatus: "Đóng cửa",
    },
  ];

  return (
    <View style={{ marginTop: 30 }}>
      <StoreList data={list} />
      <Button title="Thêm Cửa Hàng" onPress={() => nav.navigate("EditStore")} />
    </View>
  );
};

export default ManageStoreScreen;
