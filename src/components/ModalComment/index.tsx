'use client'

import styles from './modalcomment.module.css';

import Modal from "@/components/Modal";
import {IconButton} from "@/components/IconButton";
import {Chat} from "@/components/icons/Chat";
import {useRef} from "react";
import {Subheading} from "@/components/Subheading";
import {SubmitButton} from "@/components/SubmitButton";
import {Textarea} from "@/components/Textarea";

interface ModalHandles {
	openModal: () => void;
	closeModal: () => void;
}

export function ModalComment({action}: { action: any }) {

	const modalRef = useRef<ModalHandles | null>(null);

	return (
		<div>
			<Modal ref={modalRef}>
				<form action={action} onSubmit={() => modalRef.current?.closeModal()}>
					<Subheading>Deixe seu comentário sobre o post:</Subheading>
					<Textarea name="text" required placeholder="Escreva seu comentário aqui" rows={8}/>
					<div className={styles.footer}>
						<SubmitButton>Comentar</SubmitButton>
					</div>
				</form>
			</Modal>
			<IconButton onClick={() => modalRef.current?.openModal()}>
				<Chat/>
			</IconButton>
		</div>
	)
}