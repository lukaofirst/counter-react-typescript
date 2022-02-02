import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { counterActions } from '../store/counterReducer';

import { Button, Container } from '@mui/material';
import * as styles from './Counter.styled';

type dispatchFn = () => void;

const Counter: FC = () => {
    const counter = useAppSelector((state) => state.counter.counter);
    const dispatch = useAppDispatch();

    const decrement: dispatchFn = () => {
        dispatch(counterActions.decrement());
    };

    const increment: dispatchFn = () => {
        dispatch(counterActions.increment());
    };

    const increaseRandomly: dispatchFn = () => {
        dispatch(counterActions.increaseRandomly());
    };

    const reset: dispatchFn = () => {
        dispatch(counterActions.reset());
    };

    return (
        <Container maxWidth='md' sx={styles.container}>
            <h1 style={styles.resultOutput}>{counter}</h1>
            <div style={styles.btnActions}>
                <Button sx={styles.btn} onClick={decrement}>
                    Decrement
                </Button>
                <Button sx={styles.btn} onClick={increment}>
                    Increment
                </Button>
                <Button sx={styles.btn} onClick={increaseRandomly}>
                    Increase Randomly
                </Button>
                <Button sx={styles.btn} onClick={reset}>
                    Reset Counter
                </Button>
            </div>
        </Container>
    );
};

export default Counter;
