import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Fonts } from '../tokens';
import { useState } from 'react';
import EyeClosedIcon from '../../assets/icons/eye-closed';

export function Input({ isPassword = false, ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible((prev) => !prev)}>
					{isPasswordVisible ? <EyeClosedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		borderRadius: 10,
		fontSize: 16,
		color: Colors.gray,
		fontFamily: Fonts.regular,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});
