
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <WebView source={{ uri: 'http://192.168.37.80:3000' }} />
    </SafeAreaView>
  );
}
