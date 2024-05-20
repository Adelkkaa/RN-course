import { View, Text } from 'react-native';
import React from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { loginAtom, logoutAtom } from '../../entities/auth/model/auth.state';
import Button from '../../shared/Button/Button';

const MyCourses = () => {
	const [auth] = useAtom(loginAtom);

	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text>{auth.access_token}</Text>
			<Button text="Выход" onPress={logout} />
		</View>
	);
};

export default MyCourses;
