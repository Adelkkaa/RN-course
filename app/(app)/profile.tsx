import { useState } from 'react';
import { View, Text, Alert, Image, StyleSheet } from 'react-native';
import Button from '../../shared/Button/Button';
import {
	MediaTypeOptions,
	PermissionStatus,
	useMediaLibraryPermissions,
	launchImageLibraryAsync,
} from 'expo-image-picker';

export default function Profile() {
	const [image, setImage] = useState<string | null>(null);

	const [mediaPermissions, requestMediaPermission] = useMediaLibraryPermissions();

	const verifyMediaPermissions = async () => {
		if (mediaPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestMediaPermission();
			return res.granted;
		}
		if (mediaPermissions?.status === PermissionStatus.DENIED) {
			Alert.alert('Недостаточно прав для доступа к камере');
			return false;
		}
		return true;
	};

	const pickAvatar = async () => {
		const permissionGranted = await verifyMediaPermissions();
		if (!permissionGranted) {
			return;
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
		});
		console.log(result);
		if (result.assets?.length) {
			setImage(result.assets[0].uri);
		}
	};
	return (
		<View>
			<Text>Profile</Text>
			<Button text="Выбрать из галлереи" onPress={pickAvatar} />
			{image && (
				<Image
					source={{ uri: image, width: 100, height: 100 }}
					style={styles.profileImage}
					resizeMode="contain"
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	profileImage: {
		width: '100%',
		height: '100%',
	},
});
