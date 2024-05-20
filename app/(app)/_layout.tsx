import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../../shared/tokens';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';

export default function RootRayout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href="/login" />;
	}
	return (
		<SafeAreaProvider>
			<StatusBar style="light" backgroundColor={Colors.black} />
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
