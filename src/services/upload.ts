import api from "@/utils/api";
import { DeleteImageResponse, RequestIntentResponse, UploadImagesResponse } from "../types/upload.type";

export function requestUploadIntent() {
    return api.post<RequestIntentResponse>('upload-image/intent', {})
}

export function uploadImages(key:string, images:FileList) {
    const formData = new FormData();
    formData.append('key', key)
    for(let i=0; i< images.length; i++) {
        formData.append('images', images[i]);
    }
    return api.post<UploadImagesResponse>('upload-image/images', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
}

export function deleteImage(id:number) {
    return api.delete<DeleteImageResponse>(`upload-image/image/${id}`)
}