import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
import { Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import axios from 'axios';
export default class EditScreen extends React.Component {
  constructor(props) {
		super(props);
		const { _id, productName, price, description } = props.navigation.state.params.product;
		this.state = {
			_id: _id,
			productName: productName,
			price: price,
			description: description,
			img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/240px-Creative-Tail-rocket.svg.png'
		}
	}

  formSubmit = () => {
		const vm = this;
		const url = global.api+'/api/editproduct';
	
		axios.put(url, vm.state)
			.then(response => {
				const data = response.data;
				this.props.navigation.navigate('Home');
			})
			.catch(err => {
				alert(err)
			})
	}

	formSubmitDelete = () => {
		const vm = this;
		const url = global.api+'/api/deleteproduct/'+this.state._id;

		axios.delete(url, vm.state)
			.then(response => {
				const data = response.data;
				this.props.navigation.navigate('Home');
				console.log(data.msg);				
			})
			.catch(err => {
				alert(err)
			})
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Content>
					<Form style={styles.formOuter}>
						<Item floatingLabel style={styles.formInput}>
							<Label>Produto</Label>
							<Input
								onChangeText={(productName) => this.setState({ productName })}
								value={this.state.productName}
							/>
						</Item>
						<Item floatingLabel style={styles.formInput}>
							<Label>Preço</Label>
							<Input
								onChangeNumber ={(price) => this.setState({ price })}
								value={this.state.price}
							/>
						</Item>
						<Item floatingLabel style={styles.formInput}>
							<Label>Descrição</Label>
							<Input
								onChangeText={(description) => this.setState({ description })}
								value={this.state.description}
							/>
						</Item>
						<Button block primary iconLeft style={styles.submitBtn} onPress={this.formSubmit.bind(this)}>
							<Text>Editar</Text>
						</Button>
						<Button block danger iconLeft style={styles.submitBtn} onPress={this.formSubmitDelete.bind(this)}>
							<Text>Excluir</Text>
						</Button>
					</Form>
				</Content>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
	formOuter: {
		flex: 1,
		padding: 8
	},
	formInput: {
		marginLeft: 0
	},
	submitBtn: {
		marginTop: 20
	}
});
