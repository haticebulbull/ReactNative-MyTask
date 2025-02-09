import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NODEDETAIL} from '../utils/router';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NodeDetail from '../screens/nodeDetail';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitle: 'Geri'}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NODEDETAIL} component={NodeDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
