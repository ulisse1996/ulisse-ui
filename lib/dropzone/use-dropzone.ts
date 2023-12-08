import type {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  DragEventHandler,
} from 'react';
import { useCallback, useState } from 'react';

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

function isValidFile(file: File, maxSize?: number, accept?: string) {
  let valid = true;
  if (maxSize && file.size > maxSize) {
    valid = false;
  }
  if (accept) {
    const parts = accept.split(`,`).map((el) => el.trim());
    valid = parts.some((el) => file.type.match(el));
  }

  return valid;
}

function toFileInfo(file: File): FileInfo {
  return {
    file,
    id: crypto.randomUUID(),
    src: URL.createObjectURL(file),
  };
}

function useDropzone({ maxSize, accept }: UseDropzoneProps): UseDropzoneReturn {
  const [files, setFiles] = useState<FileInfo[]>([]);

  const onAddFiles = useCallback(
    (newFiles: FileList) => {
      const validFiles: FileInfo[] = [];
      for (const file of newFiles) {
        if (isValidFile(file, maxSize, accept)) {
          validFiles.push(toFileInfo(file));
        }
      }
      setFiles((prev) => [...prev, ...validFiles]);
    },
    [maxSize, accept],
  );

  const onDragOver: DragEventHandler = (e) => {
    const { types } = e.dataTransfer;
    if (types.indexOf(`Files`) > -1) {
      e.preventDefault();
    }
  };

  const onDrop = useCallback((e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    onAddFiles(e.dataTransfer.files);
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files: newFiles } = e.target;
    if (!newFiles) {
      return;
    }
    onAddFiles(newFiles);
  }, []);

  const onDelete = (item: FileInfo) => {
    setFiles((prev) => [...prev.filter((el) => el.id !== item.id)]);
  };

  return {
    files,
    onDrop,
    onChange,
    onDelete,
    onDragOver,
  };
}

export {
  type FileInfo,
  useDropzone,
  type UseDropzoneProps,
  type UseDropzoneReturn,
};
