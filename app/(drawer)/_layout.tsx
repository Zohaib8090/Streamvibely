
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    />
  );
};

export default DrawerLayout;
