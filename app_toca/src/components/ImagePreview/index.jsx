import { ContainerImagePreview, Preview } from "./styled"
import filesize from "filesize"




const ImagePreview = ({ image, onClickFunction }) => {

    const infos = {
        name: image[0].name,
        readableSize: filesize(image[0].size),
        preview: URL.createObjectURL(image[0])
    }

    return (
        <ContainerImagePreview>
            <Preview src={infos.preview}/>

        </ContainerImagePreview>
    )
    
}

export default ImagePreview