import { StyleSheet, View, TextInput, Button } from "react-native";

const EditStore = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tên Cửa Hàng" />
      <TextInput style={styles.input} placeholder="ID" />
      <TextInput style={styles.input} placeholder="Địa Chỉ" />
      <TextInput style={styles.input} placeholder="Số điện thoại" />
      <TextInput style={styles.input} placeholder="Link ảnh logo" />

      <Button title="Lưu" onPress={() => nav.navigate("ManageStore")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
  },

  input: {
    margin: 10,
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default EditStore;
