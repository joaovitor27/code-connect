'use client'
import {IconButton} from "@/components/IconButton";
import {ThumbsUp} from "@/components/icons/ThumbsUp";
import {Spinner} from "@/components/Spinner";
import {useFormStatus} from "react-dom";

export function ThumbsUpButton() {
	const {pending} = useFormStatus();
	return (
		<IconButton disabled={pending}>
			{pending ? <Spinner/> : <ThumbsUp/>}
		</IconButton>
	);
}