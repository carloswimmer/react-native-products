import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = props => {
	const { products, onPressItem } = props;
	return (
		<FlatList
			style={styles.container}
			data={products}
			renderItem={({ item }) => (
				<ProductItem
					product={item}
					navigateToEditPage={onPressItem} />
			)}
			keyExtractor={item => item.name} />
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
})

export default ProductList;