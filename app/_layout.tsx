import { Stack } from 'expo-router';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootRayout() {
	return (
		<SafeAreaProvider>
			<StatusBar style="light" backgroundColor={Colors.black} />
			<Stack
				screenOptions={{
					statusBarColor: Colors.black,
					contentStyle: {
						backgroundColor: Colors.black,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="restore"
					options={{
						presentation: 'modal',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
