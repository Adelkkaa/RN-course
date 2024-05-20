import { View, Image, StyleSheet, Text } from 'react-native';
import { IUser } from '../../model/user.model';
import { Fonts, Gaps } from '../../../../shared/tokens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function UserMenu({ user }: { user: IUser | null }) {
	if (!user) {
		return;
	}
	console.log(user);
	return (
		<View style={styles.container}>
			{user.photo ? (
				<Image
					style={styles.image}
					source={{
						uri: user.photo,
					}}
				/>
			) : (
				<Image source={require('../../../../assets/images/avatar.png')} />
			)}
			<Text style={styles.name}>{`${user.name} ${user?.surname}`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g8,
		marginTop: 30,
		marginBottom: 40,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	name: {
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});
