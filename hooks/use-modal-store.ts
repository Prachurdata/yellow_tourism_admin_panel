
import {create} from "zustand"
import { User } from "@prisma/client";
import { UsersColumn } from "@/app/(dashboard)/admin/users/components/columns";


export type ModalType = "sendBulkMessage"

interface ModalData{
    user?: User
    recipent?: UsersColumn
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    template?: any
}

interface ModalStrore{
    type: ModalType | null
    isOpen:  boolean
    data: ModalData
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStrore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({isOpen: true, type, data}),
    onClose: () => set({type: null, isOpen: false})
}))