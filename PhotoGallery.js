// Placeholder image data (REPLACE with your actual LOCAL filenames for each folder)
const imageData = {
    Ixus115: [
        
        'Ixus115/8IMG_4146.JPG', 'Ixus115/IMG_4328.JPG', 'Ixus115/IMG_4402.JPG',
        'Ixus115/IMG_2714.JPG', 'Ixus115/IMG_2935.JPG', 'Ixus115/IMG_5784.JPG', 
        'Ixus115/IMG_7034.JPG', 'Ixus115/IMG_7037.JPG', 'Ixus115/IMG_7062.JPG',
        'Ixus115/7IMG_3602.JPG', 'Ixus115/IMG_4791.JPG', 'Ixus115/IMG_6919.JPG', 
        'Ixus115/IMG_5105.JPG', 'Ixus115/5IMG_3421.JPG', 
        'Ixus115/IMG_7030.JPG',
        'Ixus115/6IMG_3860.JPG',  'Ixus115/IMG_5585.JPG',
        'Ixus115/IMG_3192.JPG', 'Ixus115/IMG_3200.JPG', 'Ixus115/IMG_5691.JPG', 
        'Ixus115/2IMG_5091.JPG', 'Ixus115/3IMG_4129.JPG',
        'Ixus115/IMG_3260.JPG', 'Ixus115/IMG_5376.JPG', 
        'Ixus115/IMG_3426.JPG', 'Ixus115/IMG_6904.JPG', 'Ixus115/IMG_3899.JPG', 
        'Ixus115/IMG_3433.JPG', 'Ixus115/IMG_6866.JPG', 'Ixus115/IMG_6887.JPG',
        'Ixus115/IMG_3469.JPG', 'Ixus115/IMG_5287.JPG', 'Ixus115/IMG_6872.JPG',
        'Ixus115/IMG_3507.JPG', 'Ixus115/IMG_4986.JPG', 
        'Ixus115/IMG_3588.JPG', 'Ixus115/IMG_5462.JPG',
        'Ixus115/IMG_3788.JPG', 'Ixus115/IMG_3793.JPG', 'Ixus115/IMG_5330.JPG',  
        'Ixus115/IMG_3862.JPG', 'Ixus115/IMG_3874.JPG',  
        
        
        
        
        
        
       
        
        
        
        
        
    ],
    Ixus970: [
        'Ixus970/IMG_0002.JPG', 'Ixus970/IMG_0220.JPG','Ixus970/IMG_0020.JPG',
        'Ixus970/IMG_0086.JPG', 'Ixus970/IMG_0364.JPG', 'Ixus970/IMG_2767.JPG',
        'Ixus970/IMG_0136.JPG', 'Ixus970/IMG_0137.JPG',
        'Ixus970/IMG_0162.JPG', 'Ixus970/IMG_0172.JPG', 
        'Ixus970/IMG_0219.JPG', 
        'Ixus970/IMG_0577.JPG', 'Ixus970/IMG_0563.JPG',  
        'Ixus970/IMG_0252.JPG', 'Ixus970/IMG_0286.JPG', 'Ixus970/IMG_0526.JPG', 
        'Ixus970/IMG_0293.JPG', 'Ixus970/IMG_0322.JPG', 'Ixus970/IMG_0331.JPG', 
        'Ixus970/IMG_0355.JPG', 'Ixus970/IMG_0412.JPG', 'Ixus970/IMG_0193.JPG',
        'Ixus970/IMG_0452.JPG', 'Ixus970/IMG_0557.JPG', 
        
        
        
        
    ],
    Iphone16pro: [
        'Iphone16pro/File_002.png', 'Iphone16pro/File_010.png', 'Iphone16pro/IMG_0368.png',
        'Iphone16pro/IMG_0383.png', 'Iphone16pro/IMG_0706.png', 'Iphone16pro/IMG_1207.png',
        'Iphone16pro/IMG_1233.png', 'Iphone16pro/IMG_1735.png', 'Iphone16pro/IMG_1781.png',
        'Iphone16pro/IMG_1842.png', 'Iphone16pro/IMG_1907.png', 'Iphone16pro/IMG_2295.png',
        'Iphone16pro/IMG_3109.png', 'Iphone16pro/IMG_3111.png', 'Iphone16pro/IMG_3131.png',
        'Iphone16pro/IMG_2380.png', 'Iphone16pro/IMG_2392.png', 
        'Iphone16pro/IMG_2478.png', 'Iphone16pro/IMG_2512.png', 
        'Iphone16pro/IMG_2533.png', 'Iphone16pro/IMG_2618.png', 'Iphone16pro/IMG_2739.png',
        'Iphone16pro/IMG_2761.png', 'Iphone16pro/IMG_2834.png', 
        'Iphone16pro/IMG_2908.png', 'Iphone16pro/IMG_2915.png', 
        'Iphone16pro/IMG_2951.png', 'Iphone16pro/IMG_2963.jpg', 
        'Iphone16pro/IMG_3033.png', 'Iphone16pro/IMG_3020.png',
        'Iphone16pro/IMG_2517.png',
        'Iphone16pro/IMG_3040.png', 'Iphone16pro/IMG_3072.png',
        'Iphone16pro/IMG_2933.jpg', 'Iphone16pro/IMG_2466.jpg', 'Iphone16pro/IMG_2841.png',
    ]
};

// --- Local Image Setup ---

function PhotoGallery({ folderName }) {
    // Get the list of image filenames for the current folder
    // Note: These paths must be relative to the index.html file
    const imagePaths = imageData[folderName] || [];

    // Function to get the correct relative path for the image
    const getImageUrl = (relativePath) => {
        // Assuming the paths in imageData are already correct relative paths
        return relativePath; 
    };

    // State to track which image is focused (if any)
    const [focusedImage, setFocusedImage] = React.useState(null);
    // Track mouse position for better positioning of the focused image
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    // State to track if we're closing (for animation)
    const [isClosing, setIsClosing] = React.useState(false);
    // Reference to the masonry grid
    const gridRef = React.useRef(null);
    // State to track if the image is loaded
    const [imageLoaded, setImageLoaded] = React.useState(false);

    // Calculate position for the focused image overlay
    const getFocusedImageStyle = () => ({
        maxWidth: '98vw',
        maxHeight: '98vh',
        width: 'auto',
        height: 'auto',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        display: 'block',
        margin: 'auto',
        animation: isClosing ? 'zoomOut 0.4s forwards' : undefined,
        position: 'fixed',
        top: '50%',
        left: imageLoaded ? '50%' : '0',
        transform: imageLoaded ? 'translate(-50%, -50%)' : 'translateY(-50%)'
    });

    // Handle image click
    const handleImageClick = (path, e) => {
        if (e) {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
        setIsClosing(false);
        setImageLoaded(false); // Reset imageLoaded on every click
        setFocusedImage(path);
    };
    
    // Handle close with animation
    const handleCloseImage = () => {
        setIsClosing(true);
        // Wait for animation to complete before removing from DOM
        setTimeout(() => {
            setFocusedImage(null);
            setIsClosing(false);
        }, 400); // Match this to your CSS animation duration
    };

    return (
        <div className={`modal-content ${focusedImage ? 'gallery-has-focused' : ''}`} style={{border: "none", boxShadow: "none", background: "transparent", position: "relative"}}> 
            {/* Overlay for focused image */}
            {focusedImage && (
                <div 
                    className="focused-image-overlay"
                    onClick={handleCloseImage}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(0,0,0,0.85)',
                        animation: isClosing ? 'fadeIn 0.4s reverse forwards' : undefined
                    }}
                >
                    <img 
                        src={getImageUrl(focusedImage)}
                        alt={`Enlarged photo from ${folderName}`}
                        style={getFocusedImageStyle()}
                        onClick={(e) => e.stopPropagation()}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            )}
            
            <div className="masonry-grid" ref={gridRef} style={{border: "none", padding: 0, margin: 0, background: "transparent"}}>
                {imagePaths.length > 0 ? (
                    imagePaths.map(path => (
                        <div 
                            className="gallery-image-wrapper"
                            key={path}
                            onClick={(e) => handleImageClick(path, e)}
                            style={{
                                border: "none", 
                                borderRadius: "10px", 
                                margin: 0, 
                                padding: 0, 
                                overflow: "hidden",
                                background: "transparent"
                            }}
                        >
                            <img 
                                src={getImageUrl(path)} 
                                alt={`Photo from ${folderName}`}
                                className="gallery-image" 
                                style={{
                                    border: "none", 
                                    borderRadius: "10px", 
                                    margin: 0, 
                                    width: "100%",
                                    background: "transparent"
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <p>No images found for this category (Check imageData in PhotoGallery.js).</p>
                )}
            </div>
        </div>
    );
}
