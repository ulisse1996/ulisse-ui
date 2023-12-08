import { DownloadCloud, ImageIcon, Trash } from 'lucide-react';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';

import { Button } from '@/button';
import { Chip } from '@/chip';
import type { FileInfo } from '@/dropzone/use-dropzone';
import { useDropzone } from '@/dropzone/use-dropzone';
import type { InputProps } from '@/input';
import { Input } from '@/input';
import { Label } from '@/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/tooltip';
import { cn } from '@/utils';

interface DropzoneProps extends Omit<InputProps, 'type'> {
  subTitle?: string;
  maxSize?: number;
}

function PreviewFile({
  file,
  onDelete,
}: {
  file: FileInfo;
  onDelete: (item: FileInfo) => void;
}) {
  const children = file.file.type.match('image/*') ? (
    <img
      src={file.src}
      alt={file.file.name}
      className="h-24 w-32 rounded-md bg-fixed object-cover"
    />
  ) : (
    <div className="flex h-24 w-32 items-center justify-center rounded-md bg-gray-300">
      <ImageIcon />
    </div>
  );

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete(file);
  };

  return (
    <div
      role="presentation"
      onClick={(e) => e.preventDefault()}
      key={file.id}
      className="relative cursor-auto"
    >
      <div className="absolute right-1 top-1">
        <Button
          variant="outline-destructive"
          size="icon"
          className="h-6 w-6"
          onClick={handleDelete}
        >
          <Trash size={16} />
        </Button>
      </div>
      <div className="absolute bottom-1 left-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Chip variant="primary" className="h-6 w-28">
                <p className="overflow-hidden text-ellipsis text-xs">
                  {file.file.name}
                </p>
              </Chip>
            </TooltipTrigger>
            <TooltipContent side="bottom">{file.file.name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {children}
    </div>
  );
}

function DropDetails({
  label,
  subTitle,
}: {
  label?: string;
  subTitle?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center pb-6 pt-5">
      <DownloadCloud />
      {label && (
        <p className="mb-2 text-sm text-secondary-foreground">{label}</p>
      )}
      {subTitle && (
        <p className="text-xs text-secondary-foreground/80">{subTitle}</p>
      )}
    </div>
  );
}

const Dropzone = forwardRef<HTMLInputElement, DropzoneProps>(
  ({ subTitle, label, ...props }, ref) => {
    const { id } = props;
    const { onDrop, onDragOver, files, onChange, onDelete } = useDropzone({
      ...props,
    });

    return (
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="relative flex w-full items-center justify-center"
      >
        <Label
          htmlFor={id}
          className={cn(
            'flex h-64 w-full cursor-pointer flex-col rounded-lg border-2 border-dashed border-secondary bg-gray-50 hover:bg-secondary/30',
            {
              'items-center justify-center': files.length === 0,
            },
          )}
        >
          {files.length === 0 ? (
            <DropDetails label={label} subTitle={subTitle} />
          ) : (
            <div className="flex flex-row gap-2 p-4">
              {files.map((file) => (
                <PreviewFile file={file} onDelete={onDelete} key={file.id} />
              ))}
            </div>
          )}
          <Input
            {...props}
            ref={ref}
            type="file"
            className="hidden"
            onChange={onChange}
          />
        </Label>
      </div>
    );
  },
);

Dropzone.displayName = 'Dropzone';

export { Dropzone, type DropzoneProps };
