
const SoundCloudPlayer = ({embedUrl}) => {
    return(
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={embedUrl}></iframe>        
    )
}

export default SoundCloudPlayer