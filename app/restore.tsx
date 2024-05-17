import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Restore() {
	return (
		<SafeAreaView>
			<Text>restore</Text>
			<Link href={'/'}>
				<Text>Домой</Text>
			</Link>
		</SafeAreaView>
	);
}
