import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

export default class FormAdd extends Component {
	constructor() {
		super();
		this._id = '';
		this.formType = 'Adiciona Produto';
		this.state = {
			productName: '',
			price: '',
			description: '',
			img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/240px-Creative-Tail-rocket.svg.png'
		}
	}

	formSubmit = () => {
		const vm = this;
		const url = global.api+'/api/createproduct';
		axios.post(url, vm.state)
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
		console.log("Render")
		return (
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
							onChangeText={(price) => this.setState({ price })}
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
						<Text>Salvar</Text>
					</Button>
				</Form>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
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