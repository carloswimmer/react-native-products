import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';

const ProductItem = props => {
	const { product, navigateToEditPage } = props;
	const name = product.productName;
	const price = product.price;
	const description = product.description;
	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={() => {
				navigateToEditPage({ product });
			}}>
				
				<View style={styles.container}>
					<Image
						style={styles.image}
						resizeMode={"cover"}
						source={{ uri: product.img_url }}
					/>
					<Text style={styles.txtTitulo}>{name}</Text>
					<Text style={styles.txtSubtitulo}>Preço:  {price}</Text>
					<Text style={styles.txtSubtitulo}>{description}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'column'
	},
	foto: {
		width: 250,
		height: 150
	},
	destalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 13,
		color: 'black',
		marginBottom: 5
	},
	txtSubtitulo: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 16
	}

});

export default ProductItem;