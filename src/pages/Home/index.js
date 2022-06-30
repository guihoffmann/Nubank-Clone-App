import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Card  from '../../components/Card';
import Actions from '../../components/Actions';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header/>
        <Card/>
        <Actions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8600C9',
  },
});