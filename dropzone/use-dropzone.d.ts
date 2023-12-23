import type { ChangeEventHandler, DragEventHandler } from 'react';
interface UseDropzoneProps {
    maxSize?: number;
    accept?: string;
}
interface FileInfo {
    id: string;
    src: string;
    file: File;
}
interface UseDropzoneReturn {
    files: FileInfo[];
    onDrop: DragEventHandler<HTMLDivElement>;
    onDragOver: DragEventHandler<HTMLDivElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onDelete: (item: FileInfo) => void;
}
declare function useDropzone({ maxSize, accept }: UseDropzoneProps): UseDropzoneReturn;
export { type FileInfo, useDropzone, type UseDropzoneProps, type UseDropzoneReturn, };
