## Introduction

This application implements a custom made react native carousel. The carousel is built using a Slider component, which takes in an array of Data objects as its data.

### Data Structure

The `Data` interface defines the structure of the data that the `Slider` component requires. Each Data object has the following properties:

-   `title`: The title to be displayed in the carousel.
-   `description`: The description to be displayed in the carousel.
-   `image`: An optional image to be displayed in the carousel. The type of the image is ImageSourcePropType from react-native.

### App Component

The `App` component is the main component that holds the `Slider` component and is responsible for rendering it. The `Slider` component takes in the data prop which is an array of `Data` objects.

The `App` component is wrapped in a SafeAreaView from react-native-safe-area-context which ensures that the carousel is displayed properly on devices with notches or rounded edges.

### Usage

To use the carousel in your own project, you will need to import the `App` component and pass in your own data to the `data` prop.

```javascript
import App from './path/to/App'
import YourData from './path/to/YourData'

function MyCarousel() {
	return <App data={YourData} />
}
```

### Conclusion

This React Native Carousel is a simple and customizable solution for displaying a set of images or data with a swipeable interface. With its flexible data structure and easily customizable styles, it can be used in a variety of applications.


### An Example of Screens that use the carousel
![Simulator Screen Shot - iPhone 14 Pro Max - 2023-04-09 at 00 47 30](https://user-images.githubusercontent.com/51236424/230744140-6a2e0e67-0462-4ca0-9e90-a0259259362e.png)

![Simulator Screen Shot - iPhone 14 Pro Max - 2023-04-09 at 00 47 43](https://user-images.githubusercontent.com/51236424/230744146-37683a81-2a36-438e-aa5d-8338f63db4cb.png)

![Simulator Screen Shot - iPhone 14 Pro Max - 2023-04-09 at 00 47 47](https://user-images.githubusercontent.com/51236424/230744155-f1406e33-4532-419b-a400-eb89930fb646.png)

![Simulator Screen Shot - iPhone 14 Pro Max - 2023-04-09 at 00 47 51](https://user-images.githubusercontent.com/51236424/230744158-c26e9149-21b7-4862-9bd6-0b68efade6ed.png)


![Screen Recording 2023-04-09 at 00 49 17](https://user-images.githubusercontent.com/51236424/230744162-e24c6511-1f6a-4549-a39b-54381886b8af.gif)








