import 'react-native-reanimated';
import { MotiView } from 'moti';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

const _color = '#6E01EF';
const _size = 100;

export default function App() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.dot, styles.center]}>
                {[...Array(3)].map((item, index) => {
                    return (
                        <MotiView
                            key={index}
                            style={[StyleSheet.absoluteFillObject, styles.dot]}
                            from={{ opacity: 0.8, scale: 1 }}
                            animate={{ opacity: 0, scale: 3 }}
                            transition={{
                                type: 'timing',
                                duration: 2000,
                                easing: Easing.out(Easing.ease),
                                delay: index * 200,
                                loop: true,
                                repeatReverse: false
                            }}
                        />
                    );
                })}
                <Feather name="phone-outgoing" size={32} color="#fff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: _size,
        height: _size,
        backgroundColor: _color,
        borderRadius: _size
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
