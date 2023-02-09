import { View, StyleSheet, Animated, Dimensions } from 'react-native'
import type { Data } from '../types'

const { width } = Dimensions.get('screen')

interface PaginationProps {
	data: Data[]
	scrollX: Animated.Value
	index: number
}

const Pagination = ({ data, scrollX, index }: PaginationProps) => {
	const styles = StyleSheet.create({
		paginationContainer: {
			position: 'absolute',
			bottom: 150,
			flexDirection: 'row',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
		},
		dot: {
			width: 12,
			height: 12,
			borderRadius: 10,
			marginHorizontal: 4,
			backgroundColor: '#ccc',
		},
		dotActive: {
			backgroundColor: '#84879a',
		},
	})
	return (
		<View style={styles.paginationContainer}>
			{data.map((_, idx) => {
				const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]
				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [12, 30, 12],
					extrapolate: 'clamp',
				})

				return (
					<Animated.View
						key={idx.toString()}
						style={[styles.dot, { width: dotWidth }, index === idx && styles.dotActive]}
					/>
				)
			})}
		</View>
	)
}

export default Pagination
