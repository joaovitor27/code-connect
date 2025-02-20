'use client';
import styles from './modal.module.css';
import {forwardRef, ReactNode, useImperativeHandle, useRef} from 'react';

interface ModalHandles {
	openModal: () => void;
}

const Modal = forwardRef<ModalHandles, { children: ReactNode; }>(({children}, ref) => {
		const dialogRef = useRef<HTMLDialogElement | null>(null);

		const closeModal = () => {
			dialogRef.current?.close();
		};

		const openModal = () => {
			dialogRef.current?.showModal();
		};

		useImperativeHandle(ref, () => ({
			closeModal,
			openModal,
		}));

		return (
			<dialog ref={dialogRef} className={styles.dialog}>
				<header className={styles.header}>
					<button onClick={closeModal}>X</button>
				</header>
				{children}
			</dialog>
		);
	}
);

Modal.displayName = 'Modal';
export default Modal;
