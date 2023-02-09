import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import type { Data } from '../types'

const { width, height } = Dimensions.get('screen')

const SlideItem = ({ item }: { item: Data }) => {
	const { title, description, image } = item
	const styles = StyleSheet.create({
		container: {
			width,
			height,
			alignItems: 'center',
		},
		image: {
			width: '100%',
			flex: 0.5,
		},
		content: {
			flex: 0.4,
			alignItems: 'center',
		},
		title: {
			fontSize: 18,
			fontWeight: 'bold',
			color: '#575864',
		},
		description: {
			fontSize: 14,
			marginVertical: 12,
			color: '#333',
			textAlign: 'center',
		},
	})
	return (
		<View style={styles.container}>
			{image && <Image source={image} resizeMode='contain' style={styles.image} />}
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</View>
	)
}

export default SlideItem
