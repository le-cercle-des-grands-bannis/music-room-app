import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Button = (props: {
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity style={styles.SubmitButtonStyle} onPress={props.onPress}>
      <Text style={{ fontWeight: 'bold', color: 'white' }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubmitButtonStyle: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#464646',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
    shadowRadius: 15,
    shadowOpacity: 0.5,
    elevation: 20,
  },
});
