import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import FormAdd from '../components/FormAdd';
import { ScrollView, StyleSheet } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

export default class AddEditScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Adiciona',
    headerLeft: <HeaderBackButton onPress={() => navigation.navigate('HomeStack')} />
  });
  render() {
    return (
      <ScrollView style={styles.container}>
        <FormAdd navigation={this.props.navigation} />
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
});
