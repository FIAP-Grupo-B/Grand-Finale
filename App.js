import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import LoginStack from 'routes/Login/stackTabs';
import { AuthProvider } from 'context/auth';
function App(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
          <AuthProvider>
            <LoginStack />
          </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
