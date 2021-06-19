import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import React from 'react';

export default function Note(props) {
    const pressed = useSharedValue(false);
    const y = useSharedValue(props.y);

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            pressed.value = true;
            ctx.startY = y.value;
        },
        onActive: (event, ctx) => {
            y.value = ctx.startY + event.translationY;
            console.log("바뀐 y.value: " + y.value)
        },
        onEnd: (event, ctx) => {
            pressed.value = false;
        },
    });

    const uas = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? '#51DE5B' : '#51CDDE',
            transform: [{ translateY: y.value-(props.x-20)/3 }], // 주작
            width: 20,
            height: 10,
            borderRadius: 5,
            marginLeft: props.x,
        };
    });

    return (
        <PanGestureHandler onGestureEvent={eventHandler}>
            <Animated.View style={uas} />
        </PanGestureHandler>
    );
}
