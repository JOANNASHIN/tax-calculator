import { RefObject } from 'react';
import { IHandleModal } from '@/components/modal/Modal';

export const useModal = () => {
  const openModal = (target: RefObject<IHandleModal>) => {
    if (!target?.current) return;

    target.current.openModal();
  };

  const closeModal = (target: RefObject<IHandleModal>) => {
    if (!target?.current) return;

    target.current.closeModal();
  };

  return {
    openModal,
    closeModal,
  };
};
