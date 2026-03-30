
import { useAuth } from '@/context/AuthContext';
import { Button, View } from 'react-native';


export default function Profile() {
  const { logout } = useAuth();
  return (
    <View>
      <Button title='Logout' onPress={logout} />
    </View>
  )
}
