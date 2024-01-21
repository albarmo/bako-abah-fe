import { convertSeccondsToTime } from '@components/Table/table-utils';
import { useEffect, useState } from 'react';



const useCountdown = (id: string) => {
    const [count, setCount] = useState<string>('');

    const startCountdown = (seconds: number): void => {
        const start = new Date()
        const checkStorageTime = localStorage.getItem(`time-${id}`)

        if (!checkStorageTime) {
            localStorage.setItem('time-' + id, start.toString())
        }

        let temp = seconds;
        function tick(): void {
            temp--;
            const res = convertSeccondsToTime(temp);
            setCount(res);
            if (temp > 0) {
                setTimeout(tick, 1000);
            } else {
                setCount('');
                localStorage.removeItem(`time-${id}`)
            }
        }
        tick();
    };

    // ONLOAD start countdown
    useEffect(() => {
        if (!id.includes('callback')) return

        const checkStorageTime = localStorage.getItem(`time-${id}`)
        if (!checkStorageTime) return

        const timeStart: any = new Date(checkStorageTime)
        const now: any = new Date()
        const seconds: number = Math.abs(timeStart - now) / 1000;
        const staleTime = 300 - seconds

        if (checkStorageTime) {
            startCountdown(staleTime)
        }
    }, []);


    return { count, startCountdown };
};

export { useCountdown };
