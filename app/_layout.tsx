import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainLayout() {
	return (
		<SafeAreaView>
			<Slot />
		</SafeAreaView>
	);
}
