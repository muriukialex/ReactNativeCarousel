import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Slider from './components/Slider'
// import type { AppProps } from './types'

import data from './const'

export default function App(/*data: AppProps*/) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Slider data={data} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
