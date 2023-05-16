import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import './modal.css';

export const Modal = ({ setModalActive, modalActive, children }) => {
  const closeEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        document.removeEventListener('keydown', closeEscape);
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
        <span className="modal__close" onClick={() => setModalActive(false)}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};
