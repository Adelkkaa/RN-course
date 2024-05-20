import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import Button from '../shared/Button/Button';
import { useEffect, useState } from 'react';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {
	const [localError, setLocalError] = useState<string>('');
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ access_token, error, isLoading }, login] = useAtom(loginAtom);

	useEffect(() => {
		const timerId = setTimeout(() => setLocalError(''), 4000);

		return () => {
			clearTimeout(timerId);
		};
	}, [localError]);

	const submit = () => {
		if (!email) {
			setLocalError('Не введён email');
			return;
		}
		if (!password) {
			setLocalError('Не введён пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)');
		}
	}, [access_token]);
	return (
		<TouchableWithoutFeedback onPressOut={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<ErrorNotification error={localError} />
				<View style={styles.content}>
					<Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="contain" />
					<View style={styles.form}>
						<Input placeholder="Email" onChangeText={setEmail} />
						<Input isPassword placeholder="Пароль" onChangeText={setPassword} />
						<Button text="Войти" isLoading={isLoading} onPress={submit} />
					</View>
					<CustomLink href={'/restore'} text="Восстановить пароль"></CustomLink>
				</View>
			</View>
		</TouchableWithoutFeedback>
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
