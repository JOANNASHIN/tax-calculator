import App from '@/constants/app';
import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

interface IModalProps {
  title?: string;
  className?: string;
  children?: React.ReactElement;
  showTitle?: boolean;
  showHeader?: boolean;
  showClose?: boolean;
  scrollLock?: boolean;
}

export interface IHandleModal {
  openModal: () => void;
  closeModal: () => void;
}

const Modal = forwardRef<IHandleModal, IModalProps>(
  (
    { title = '', children, showHeader = true, showTitle = true, showClose = true, scrollLock = true, className },
    ref,
  ) => {
    const [show, setShow] = useState(false);

    /**
     * 모달 열기
     */
    const openModal = () => {
      setShow(true);

      if (scrollLock) {
        document.querySelector('body')?.classList.add(App.ClassName.ScrollLock);
      }
    };

    /**
     * 모달닫기
     */
    const closeModal = () => {
      setShow(false);
      document.querySelector('body')?.classList.remove(App.ClassName.ScrollLock);
    };

    /**
     * 내보낼 이벤트
     */
    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    return (
      <>
        {show && (
          <article className={classNames('modal', className)}>
            {showHeader && (
              <header className="modal__header">
                {showTitle && <h2 className="modal__title">{title}</h2>}

                {showClose && (
                  <button className="modal__close" onClick={closeModal}>
                    <img src="/assets/images/icon/close.svg" alt="닫기" />
                  </button>
                )}
              </header>
            )}

            <div className="modal__content">{children}</div>
          </article>
        )}
      </>
    );
  },
);

export default Modal;
