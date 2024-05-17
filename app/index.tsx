import { StyleSheet, Text, View, Image } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import { useEffect, useState } from 'react';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
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
				<Link href={'/restore'}>
					<Text>Восстановить пароль!</Text>
				</Link>
			</View>
			<StatusBar style="light" backgroundColor={Colors.black} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexGrow: 1,
		flexBasis: '100%',
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
