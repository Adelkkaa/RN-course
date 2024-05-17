import { StyleSheet, View, Image } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import { useEffect, useState } from 'react';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { CustomLink } from '../shared/CustomLink/CustomLink';

export default function Login() {
	const [error, setError] = useState<string>('');
	const alert = () => {
		setError('Неверный логин или пароль');
	};

	useEffect(() => {
		const timerId = setTimeout(() => setError(''), 4000);

		return () => {
			clearTimeout(timerId);
		};
	}, [error]);
	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="contain" />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input placeholder="Пароль" isPassword={true} />
					<Button onPress={alert} text="Войти" />
				</View>
				<CustomLink href={'/restores'} text="Восстановить пароль"></CustomLink>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	logo: {
		width: 220,
	},
});
