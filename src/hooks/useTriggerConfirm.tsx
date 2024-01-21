import { useState, useEffect, useCallback } from 'react';

const useTriggerConfirm = (): {
   isConfirmOpen: boolean;
   confirm: (callbackFn: () => void) => void;
   cancel: () => void;
   proceed: () => void;
} => {
   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
   const [callback, setCallback] = useState<(() => void) | null>(null);

   const handleConfirm = useCallback((event: KeyboardEvent) => {
      if (event.key === 'Escape') {
         setIsConfirmOpen(false);
      }
   }, []);

   useEffect(() => {
      document.addEventListener('keydown', handleConfirm);

      return () => {
         document.removeEventListener('keydown', handleConfirm);
      };
   }, [handleConfirm]);

   const confirm = useCallback((callbackFn: () => void) => {
      setIsConfirmOpen(true);
      setCallback(() => callbackFn);
   }, []);

   const cancel = useCallback(() => {
      setIsConfirmOpen(false);
      setCallback(null);
   }, []);

   const proceed = useCallback(() => {
      setIsConfirmOpen(false);
      if (callback) {
         callback();
      }
      setCallback(null);
   }, [callback]);

   return {
      isConfirmOpen,
      confirm,
      cancel,
      proceed,
   };
};

export default useTriggerConfirm;
