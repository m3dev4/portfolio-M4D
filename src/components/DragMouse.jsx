import { useState } from 'react';
import { FaHandPointer } from 'react-icons/fa';

function Drag() {

  const [isRotating, setIsRotating] = useState(false);

  const handleMouseDown = () => {
    setIsRotating(true);
  }
  
  const handleMouseUp = () => {
    setIsRotating(false);
  }

  return (
    <div className="scene3D">
      <div 
        className="object3D"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}  
      />
      
      {isRotating ? null : (
        <div className="handIcon">
        <FaHandPointer size={32} />       
         </div>  
      )}
      
    </div>
  )
}
export default Drag