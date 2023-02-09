import type { ImageSourcePropType } from 'react-native'

export interface Data {
	title: string
	description: string
	image?: ImageSourcePropType | undefined
}

export interface AppProps extends Array<Data> {}
