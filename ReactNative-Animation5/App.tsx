import * as React from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Easing,
    SafeAreaViewBase,
    SafeAreaView
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const DATA = [...Array(20).keys()].map((_, i) => {
    return {
        key: Math.random(),
        image: `https://randomuser.me/api/portraits/women/12.jpg`,
        name: 'alica',
        jobTitle: 'developer',
        email: 'alica@mail.ru'
    };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
            <Animated.FlatList
                data={DATA}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true
                })}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{
                    paddingTop: StatusBar.currentHeight || 22
                }}
                renderItem={({ item, index }) => {
                    const inputRange = [-1, 0, 120 * index, 120 * (index + 1)];

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    });
                    return (
                        <Animated.View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: SPACING,
                                backgroundColor: 'red',
                                marginBottom: 10,
                                borderRadius: 20,
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: 20,
                                transform: [{ scale }]
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: AVATAR_SIZE,
                                    height: AVATAR_SIZE,
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: 20
                                }}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontWeight: '700' }}>{item.jobTitle}</Text>
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
};
