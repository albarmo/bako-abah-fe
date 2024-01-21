import { useState } from 'react';

export const useToggle = (initValue = false) => {
    const [isExpand, setIsExpand] = useState<boolean>(initValue);
    function onToggle() {
        setIsExpand(!isExpand);
    }

    return [isExpand, { onToggle }];
};
