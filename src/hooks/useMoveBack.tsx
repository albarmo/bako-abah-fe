import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';

const useMoveBack = (): (() => void) => {
   const router = useRouter();

   const handleMoveBack = useCallback(() => {
      router.back();
   }, [router]);

   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === 'ArrowLeft') {
            event.preventDefault();
            handleMoveBack();
         }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   }, [handleMoveBack]);

   return handleMoveBack;
};

export default useMoveBack;
