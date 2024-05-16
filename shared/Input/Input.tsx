import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../tokens';

export function Input(props: TextInputProps) {
	return (
		<TextInput
			style={styles.input}
			placeholderTextColor={Colors.gray}
			{...props} />
	)
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		borderRadius: 10,
		fontSize: 16,
	}
});