import 'react-native-reanimated';
import { MotiView } from 'moti';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const LoadingIndicator = ({ sise }: { size: number }) => {
    return (
        <MotiView
            transition={{
                type: 'timing',
                duration: 2000,
                loop: true
            }}
            from={{
                borderWidth: 0,
                width: 100,
                height: 100,
                borderRadius: 56,
                shadowOpacity: 0
            }}
            animate={{
                shadowOpacity: 1,
                borderWidth: 10,
                width: 200,
                height: 200,
                borderRadius: 120
            }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 56,
                borderWidth: 5,
                borderColor: 'white',
                shadowColor: 'white',
                shadowOpacity: 1,
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 10
            }}
        ></MotiView>
    );
};

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            <LoadingIndicator size={100} />
        </View>
    );
}

const styles = StyleSheet.create({});
