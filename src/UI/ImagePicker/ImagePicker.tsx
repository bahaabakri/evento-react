import {  useEffect, useRef, useState } from 'react'
import styles from './ImagePicker.module.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { uploadImages as uploadImagesService, deleteImage as deleteImageService } from '@/services/upload';
import { RequestIntentResponse } from '@/types/upload.type';
interface ImagePickerProps {
    uploadIntent?:RequestIntentResponse
    errorMessage?:string;
    onChange?: (files: File[], selectedImages:SelectedImage[]) => void;
    name?: string;
}
export interface SelectedImage {
    id:number;
    name:string,
    url:string
}
const ImagePicker = ({onChange, errorMessage, uploadIntent}: ImagePickerProps) => {
    console.log(uploadIntent);
    
    const fileRef = useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([])
    const [selectedImagesFiles, setSelectedImagesFiles] = useState<File[]>([])
    
    useEffect(() => {
        onChange?.(selectedImagesFiles, selectedImages)
    }, [selectedImagesFiles, selectedImages, onChange])
    
    const onUploadFile = async (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
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
        if (!uploadIntent || Date.now() > new Date(uploadIntent.createdAt).getTime() + 10 * 60 * 1000) return


        if (files && files.length > 0) {
            // console.log(files);
            for(let i=0; i< files.length; i++) {
                if ((files[i].type.split('/')[0] !== 'image') || (selectedImagesFiles?.some(el => el.name === files[i].name))) continue;
                // save files for validation in parent component
                setSelectedImagesFiles(prev => {
                    return [
                        ...prev,
                        files[i]
                ]}
            )
            }
            // upload images to BE
            const uploadedImages = await uploadImagesService(uploadIntent.key, files)
            uploadedImages.forEach((uploadedImage) => {
                setSelectedImages(prev => {
                       return [
                           ...prev,
                           {
                                id: uploadedImage.id,
                               name: uploadedImage.name,
                               url: `http://localhost:3000${uploadedImage.imagePath}`
                           }
                       ]
                   })

            })
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
    const deleteImage = async (event:React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        event.stopPropagation()
        try {
            await deleteImageService(id)
            setSelectedImages(prev => {
                return prev.filter(el => el.id !== id)
            })
        } catch(err:unknown) {
            console.log(err);
            
        }
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
                {/* <input
                    type="file"
                    {...inputProps}
                    multiple
                    className='hidden'
                    ref={(el) => {
                        if (el && selectedImagesFiles.length > 0) {
                        const dt = new DataTransfer();
                        selectedImagesFiles.forEach((file ) => dt.items.add(file));
                        el.files = dt.files;
                        }
                    }}
                /> */}
                {
                selectedImages.length > 0 && 
                <div className={styles['images-preview']}>
                    {
                        selectedImages.map(selectedImage => 
                        <div className={styles['selected-image']} key={selectedImage.name}>
                            <img src={selectedImage.url} alt={selectedImage.name} />
                            <div className={styles['delete-icon']} onClick={(event) => deleteImage(event, selectedImage.id)}>
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