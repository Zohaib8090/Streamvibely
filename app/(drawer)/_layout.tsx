
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerItemStyle:
          route.name === '(tabs)' || route.name === 'drawer'
            ? { display: 'none' }
            : {},
      })}
    />
  );
};

export default DrawerLayout;
