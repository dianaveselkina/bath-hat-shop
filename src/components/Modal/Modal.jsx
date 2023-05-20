import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import './modal.css';
import { BsXSquare } from 'react-icons/bs';

export const Modal = ({ setModalActive, modalActive, children }) => {
  const closeEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setModalActive(false);
      }
    },
    [setModalActive]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeEscape);

    return () => document.removeEventListener('keydown', closeEscape);
  }, [closeEscape]);
  return (
    <div id="modalId" className={cn('modal', { active: modalActive })}>
      <div className={cn('modal__info', { active: modalActive })}>
        <BsXSquare
          className="modal__close"
          onClick={() => setModalActive(false)}
        />

        {children}
      </div>
    </div>
  );
};
