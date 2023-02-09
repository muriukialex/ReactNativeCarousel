import { useRef, useState } from 'react'
import { View, FlatList, NativeScrollEvent, NativeSyntheticEvent, Animated, ViewToken } from 'react-native'
import SlideItem from './SlideItem'
import Pagination from './Pagination'
import type { AppProps } from '../types'

interface SliderProps {
	data: AppProps
}

const Slider = ({ data }: SliderProps) => {
	const [index, setIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current
	const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			},
		)(event)
	}

	const handleOnViewableItemsChanged = useRef((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
		let newIndex = info.viewableItems[0].index
		if (typeof newIndex === 'number') {
			setIndex(newIndex)
		}
	}).current

	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 50,
	}).current

	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => <SlideItem item={item} />}
				horizontal
				pagingEnabled
				snapToAlignment='center'
				showsHorizontalScrollIndicator={false}
				onScroll={handleOnScroll}
				onViewableItemsChanged={handleOnViewableItemsChanged}
				viewabilityConfig={viewabilityConfig}
			/>
			<Pagination data={data} scrollX={scrollX} index={index} />
		</View>
	)
}

export default Slider
