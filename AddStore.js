import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddStore = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên Cửa Hàng"
            />
            <TextInput
                style={styles.input}
                placeholder="ID"
            />
            <TextInput
                style={styles.input}
                placeholder="Địa Chỉ"
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
            />
            <TextInput
                style={styles.input}
                placeholder="Link ảnh logo"
            />

            <Button
                title="Thêm"
                color="#000000"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        margin: 10,
        height: 40,
        width: 300,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
    }
  });
  
export default AddStore;
