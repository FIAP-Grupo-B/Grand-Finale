import React from 'react';
import NavBar from 'components/NavBar';
import { ScrollView, SafeAreaView, View, Text, Image, StatusBar } from 'react-native';
import TopTabs from 'routes/topTabs';




export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
        <TopTabs />
    </SafeAreaView>
  )
}
