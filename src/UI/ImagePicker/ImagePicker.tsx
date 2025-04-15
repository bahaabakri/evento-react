import {  useEffect, useRef, useState } from 'react'
import styles from './ImagePicker.module.scss'
import DeleteIcon from '@mui/icons-material/Delete';
interface ImagePickerProps {
    errorMessage?:string;
    onChange?: (files: File[]) => void;
    name?: string;
}
interface SelectedImage {
    name:string,
    url:string,
    file:File
}
const ImagePicker = ({onChange, errorMessage, ...inputProps}: ImagePickerProps) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([])
    
    useEffect(() => {
        onChange?.(selectedImages.map(el => el.file))
    }, [selectedImages, onChange])
    
    const onUploadFile = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        let files: FileList | null = null;

        if ("dataTransfer" in event) {
            // Handling drag and drop
            files = event.dataTransfer.files;
        } else {
            // Handling file input change
            files = event.target.files;
        }

        if (files && files.length > 0) {
            // console.log(files);
            for(let i=0; i< files.length; i++) {
                if ((files[i].type.split('/')[0] !== 'image') || (selectedImages?.some(el => el.name === files[i].name))) continue;
                // upload file
                setSelectedImages(prev => {
                    return [
                        ...prev,
                        {
                            name: files[i].name,
                            url: URL.createObjectURL(files[i]),
                            file: files[i]
                        }
                    ]
                })
            }
        }
    };
    const onDragOverImages = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(true)
        event.dataTransfer.dropEffect = "copy"
    }
    const onDragLeaveImages = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(false)
    }
    const onDropImages = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDragging(false)
        onUploadFile(event)
    }
    const deleteImage = (event:React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
        event.stopPropagation()
        setSelectedImages(prev => {
            return prev.filter(el => el.name !== name)
        })
    }
    return (
        <div className={styles['image-picker-wrapper']}>
            <div className={styles['image-picker']} 
            onClick={() => fileRef.current?.click()} 
            onDrop={onDropImages}
            onDragOver={onDragOverImages}
            onDragLeave={onDragLeaveImages}>
                <div className={styles['image-picker-content']}>
                    {
                        isDragging ? 'Drop images here'
                        : 'Drag & Drop images or Browse'
                    }
                </div>
                <input 
                    ref={fileRef} 
                    type="file" 
                    multiple 
                    className='hidden' 
                    accept=".png, .jpg, .jpeg" 
                    onChange={(e) => onUploadFile(e)} />
                <input
                    type="file"
                    {...inputProps}
                    multiple
                    className='hidden'
                    ref={(el) => {
                        if (el && selectedImages.length > 0) {
                        const dt = new DataTransfer();
                        selectedImages.forEach(({ file }) => dt.items.add(file));
                        el.files = dt.files;
                        }
                    }}
                />
                {
                selectedImages.length > 0 && 
                <div className={styles['images-preview']}>
                    {
                        selectedImages.map(selectedImage => 
                        <div className={styles['selected-image']} key={selectedImage.name}>
                            <img src={selectedImage.url} alt={selectedImage.name} />
                            <div className={styles['delete-icon']} onClick={(event) => deleteImage(event, selectedImage.name)}>
                                <DeleteIcon sx={{color: 'white', fontSize: '16px'}} />
                            </div>
                        </div>
                        )
                    }
                </div>
            }
            </div>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>


    )
} 
export default ImagePicker