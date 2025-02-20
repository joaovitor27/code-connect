'use client';

import {useFormStatus} from "react-dom";
import {Spinner} from "@/components/Spinner";
import {ArrowFoward} from "@/components/icons/ArrowFoward";
import {Button} from "@/components/Button";



export function SubmitButton({children}: { children: string }) {
	const {pending} = useFormStatus();
	return (
		<Button aria-disabled={pending} type="submit">
			{pending ? <Spinner/> : <>{children}<ArrowFoward/> </>}
		</Button>
	);
}