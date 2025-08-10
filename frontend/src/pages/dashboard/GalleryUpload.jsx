import React, { useState, useEffect } from 'react';

const GalleryUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [images, setImages] = useState([]);

  // This would be where you fetch images from your backend
  useEffect(() => {
    // Example: fetch('/api/images').then(res => res.json()).then(data => setImages(data));
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    // Example of a backend API call
    // try {
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   const result = await response.json();
    //   console.log('Upload success:', result);
    //   // Update the images state with the new image
    //   setImages([...images, result.newImage]);
    //   setSelectedFile(null);
    //   setPreviewUrl(null);
    // } catch (error) {
    //   console.error('Upload failed:', error);
    // }
  };

  const handleDelete = (imageId) => {
    // Example: send a DELETE request to your backend to remove the image
    // fetch(`/api/images/${imageId}`, { method: 'DELETE' })
    //   .then(() => {
    //     setImages(images.filter(img => img.id !== imageId));
    //   });
  };

  return (
    <div>
      <h2>Gallery Upload</h2>
      <input type="file" onChange={handleFileChange} />
      {previewUrl && (
        <div>
          <p>Preview:</p>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px' }} />
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      )}

      ---

      <h2>Uploaded Images</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.title} style={{ maxWidth: '150px' }} />
            <button onClick={() => handleDelete(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryUpload;