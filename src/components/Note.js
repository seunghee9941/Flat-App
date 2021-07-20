import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

export const Note = (props) => {
    const pressed = useSharedValue(false);
    const y = useSharedValue(props.y);

    // TODO: 제대로 수정
    const getNoteCenter = (value) => {
        'worklet';
        console.log("getPixel: " + value)
        if (value <= 49*5-200) return 48*5-200;
        else if (value <= 51*5-200) return 50*5-200;
        else if (value <= 52.5*5-200) return 52*5-200;
        else if (value <= 54*5-200) return 53*5-200;
        else if (value <= 55.5*5-200) return 55*5-200;
        else if (value <= 58*5-200) return 57*5-200;
        else if (value <= 59.5*5-200) return 59*5-200;
        else if (value <= 61*5-200) return 60*5-200;
        else if (value <= 63*5-200) return 62*5-200;
        else if (value <= 64.5*5-200) return 64*5-200;
        else if (value <= 66*5-200) return 65*5-200;
        else if (value <= 68*5-200) return 67*5-200;
        else if (value <= 70*5-200) return 69*5-200;
        else if (value <= 71.5*5-200) return 71*5-200;
        else if (value <= 73*5-200) return 72*5-200;
        else if (value <= 75*5-200) return 74*5-200;
        else if (value <= 76.5*5-200) return 76*5-200;
        else if (value <= 78*5-200) return 77*5-200;
        else if (value <= 80*5-200) return 79*5-200;
        else if (value <= 82*5-200) return 81*5-200;
        else return 83*5-200;
    };

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            pressed.value = true;
            ctx.startY = y.value;
        },
        onActive: (event, ctx) => {
            y.value = getNoteCenter(ctx.startY + event.translationY);
            console.log("onActive y.value: " + y.value)
        },
        onEnd: (event, ctx) => {
            pressed.value = false;
        },
    });

    const uas = useAnimatedStyle(() => {
        return {
            backgroundColor: pressed.value ? '#51DE5B' : '#51CDDE',
            transform: [{ translateY: y.value-(props.x-20)/3}], // 주작 -(props.x-20)/3
            width: 20,
            height: 10,
            borderRadius: 5,
            marginLeft: props.x,
            borderColor: '#000000'
        };
    });

    return (
        <PanGestureHandler onGestureEvent={eventHandler} onEnded={()=> {props.setY(y.value); props.setIdx(props.idx)}}>
            <Animated.View style={uas} />
        </PanGestureHandler>
    );
}
