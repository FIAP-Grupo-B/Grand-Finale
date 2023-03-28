    import React from 'react'
    import Swiper from 'react-native-swiper'
    import { Text, View, Image, StyleSheet, FlatList, Dimensions } from 'react-native'

    const {width} = Dimensions.get('window')

    export default function Storys() {
        let data = [
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
            {
                image: require('assets/exemplo.jpg'),
                // user: ''
            },
        ]

    return (
        <>
            <View style={style.container}>
                <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToOffsets={[...Array(data.length)].map((x,i) => i * (width * 0.8 -40) + (i - 1) * 40,)}
                snapToAlignment={'start'}
                scrollEventThrottle={16}
                decelerationRate="fast"
                style={style.swiper}
                renderItem={({item}) => 
                    <View style={style.swiperSlide}>
                        <Image source={item.image} style={{width: '100%', height: '100%', borderRadius: 1000}} />
                    </View>
                    }
                />
            </View>
        </>
    )
    }

    const style = StyleSheet.create({
        container: {
            backgroundColor: '#FFFF',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 20,
        },
        swiper: {
            marginVertical: 10,
            minWidth: "100%"
        },
        swiperSlide: {
            borderWidth: 3,
            borderColor: '#6bb314',
            marginHorizontal: 5,
            borderRadius: 1000,
            width: width * 0.16,
            height: width / 6
        }
    })