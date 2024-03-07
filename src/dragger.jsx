// import React, { useState } from 'react';

// const DraggableShape = () => {
//   const [shapes, setShapes] = useState([]);
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [order, setOrder] = useState([]);

//   const [dragging, setDragging] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (id, e) => {
//     const shape = shapes.find((s) => s.id === id);
//     if (shape) {
//       setDragging(id);
//       setOffset({
//         x: e.clientX - shape.left,
//         y: e.clientY - shape.top,
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (dragging !== null) {
//       setShapes((prevShapes) =>
//         prevShapes.map((shape) =>
//           shape.id === dragging
//             ? {
//                 ...shape,
//                 left: e.clientX - offset.x,
//                 top: e.clientY - offset.y,
//               }
//             : shape
//         )
//       );

//       // Update the order based on the dragging sequence
//       setOrder((prevOrder) => {
//         const updatedOrder = [...prevOrder];
//         const draggedIndex = updatedOrder.findIndex((item) => item.id === dragging);

//         if (draggedIndex !== -1) {
//           // Move the dragged item to the end of the array
//           const [draggedItem] = updatedOrder.splice(draggedIndex, 1);
//           updatedOrder.push(draggedItem);
//         }

//         return updatedOrder;
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   const addShape = () => {
//     if (selectedShape) {
//       const newShape = {
//         id: Date.now(),
//         left: 0,
//         top: 0,
//         type: selectedShape,
//       };

//       setShapes((prevShapes) => [...prevShapes, newShape]);
//       setOrder((prevOrder) => [...prevOrder, { id: newShape.id, type: newShape.type }]);
//     }
//   };

//   const shapeOptions = ['circle', 'square', 'triangle'];

//   return (
//     <div style={{ display: 'flex' }}>
//       <div>
//         {shapeOptions.map((shapeType) => (
//           <div
//             key={shapeType}
//             style={{
//               width: '50px',
//               height: '50px',
//               backgroundColor: getShapeColor(shapeType),
//               borderRadius: shapeType === 'circle' ? '50%' : '0',
//               margin: '0 5px',
//               cursor: 'pointer',
//             }}
//             onClick={() => setSelectedShape(shapeType)}
//           ></div>
//         ))}
//         <div>
//           <button onClick={addShape} disabled={!selectedShape}>
//             Add Shape
//           </button>
//         </div>
//       </div>
//       <div
//         style={{
//           position: 'relative',
//           width: '800px',
//           height: '600px',
//           border: '1px solid #ccc',
//         }}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         {shapes.map((shape) => (
//           <div
//             key={shape.id}
//             style={{
//               position: 'absolute',
//               left: shape.left,
//               top: shape.top,
//               width: '50px',
//               height: '50px',
//               backgroundColor: getShapeColor(shape.type),
//               borderRadius: shape.type === 'circle' ? '50%' : '0',
//               cursor: 'move',
//             }}
//             onMouseDown={(e) => handleMouseDown(shape.id, e)}
//           ></div>
//         ))}
//       </div>
//       <div>
//         <h2>Shape Order</h2>
//         <ul>
//           {order.map((shape, index) => (
//             <li key={shape.id}>{`${index + 1}. Shape ID: ${shape.id}, Type: ${shape.type}`}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const getShapeColor = (shapeType) => {
//   switch (shapeType) {
//     case 'circle':
//       return 'blue';
//     case 'square':
//       return 'red';
//     case 'triangle':
//       return 'green';
//     default:
//       return 'black';
//   }
// };

// export default DraggableShape;



// import React, { useState } from 'react';

// const DraggableShape = () => {
//   const [shapes, setShapes] = useState([]);
//   const [selectedShape, setSelectedShape] = useState(null);
//   const [order, setOrder] = useState([]);

//   const [dragging, setDragging] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (id, e) => {
//     const shape = shapes.find((s) => s.id === id);
//     if (shape) {
//       setDragging(id);
//       setOffset({
//         x: e.clientX - shape.left,
//         y: e.clientY - shape.top,
//       });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (dragging !== null) {
//       setShapes((prevShapes) =>
//         prevShapes.map((shape) =>
//           shape.id === dragging
//             ? {
//               ...shape,
//               left: e.clientX - offset.x,
//               top: e.clientY - offset.y,
//             }
//             : shape
//         )
//       );

//       // Update the order based on the dragging sequence
//       setOrder((prevOrder) => {
//         const updatedOrder = [...prevOrder];
//         const draggedIndex = updatedOrder.findIndex((item) => item.id === dragging);

//         if (draggedIndex !== -1) {
//           // Move the dragged item to the end of the array
//           const [draggedItem] = updatedOrder.splice(draggedIndex, 1);
//           updatedOrder.push(draggedItem);
//         }

//         return updatedOrder;
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setDragging(null);
//   };

//   const addShape = () => {
//     if (selectedShape) {
//       const newShape = {
//         id: Date.now(),
//         left: 0,
//         top: 0,
//         type: selectedShape,
//       };

//       setShapes((prevShapes) => [...prevShapes, newShape]);
//       setOrder((prevOrder) => [...prevOrder, { id: newShape.id, type: newShape.type }]);
//     }
//   };

//   const shapeOptions = ['circle', 'square', 'triangle', 'rectangle', 'hexagon'];

//   const getShapeStyles = (shapeType) => {
//     switch (shapeType) {
//       case 'circle':
//         return { width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'yellow' };
//       case 'square':
//         return { width: '50px', height: '50px', borderRadius: '0', backgroundColor: 'green' };
//       case 'triangle':
//         return {
//           width: '45px',
//           height: '45px',
//           clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
//           backgroundColor: 'blue',
//         };
//       case 'rectangle':
//         return { width: '80px', height: '50px', borderRadius: '5px', background: 'red' };
//       case 'hexagon':
//         return {
//           width: '100px',
//           height: '57.74px',
//           backgroundColor: 'purple',
//           clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//         };
//       default:
//         return { width: '50px', height: '50px' };
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         background: '#e0e0e0',
//         fontFamily: 'Arial, sans-serif',
//         // marginTop:'5rem',
//         paddingTop:'3rem'
//       }}
//     >
//       <div style={{ textAlign: 'left', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//         <h1 style={{ margin: '0 0 20px' }}>Draggable Shapes</h1>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '10rem',paddingTop:'2rem' }}>
//           {shapeOptions.map((shapeType) => (
//             <div
//               key={shapeType}
//               style={{
//                 ...getShapeStyles(shapeType),
//                 margin: '0 10px',
//                 cursor: 'pointer',
//                 border: '1px solid #333',
//               }}
//               onClick={() => setSelectedShape(shapeType)}
//             ></div>
//           ))}
//         </div>
//         <button
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             cursor: 'pointer',
//             background: '#4caf50',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             marginBottom: '20px',
//           }}
//           onClick={addShape}
//           disabled={!selectedShape}
//         >
//           Add Shape
//         </button>
//         <div
//           style={{
//             position: 'relative',
//             width: '800px',
//             height: '600px',
//             border: '1px solid #ccc',
//             background: `linear-gradient(to right, #ccc 1px, transparent 1px),
//                        linear-gradient(to bottom, #ccc 1px, transparent 1px)`,
//             backgroundSize: '20px 20px',
//             overflow: 'hidden',
//           }}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//         >
//           {shapes.map((shape) => (
//             <div
//               key={shape.id}
//               style={{
//                 position: 'absolute',
//                 left: shape.left,
//                 top: shape.top,
//                 ...getShapeStyles(shape.type),
//                 cursor: 'move',
//                 border: '1px solid #333',
//               }}
//               onMouseDown={(e) => handleMouseDown(shape.id, e)}
//             ></div>
//           ))}
//         </div>
//         <div>
//           <h2 style={{ margin: '20px 0 10px' }}>Shape Order</h2>
//           <ul style={{ padding: '0', listStyle: 'none', margin: '0' }}>
//             {order.map((shape, index) => (
//               <li key={shape.id} style={{ marginBottom: '5px' }}>{`${index + 1}. Shape ID: ${shape.id}, Type: ${shape.type}`}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DraggableShape;


import React, { useState } from 'react';

const DraggableShape = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [order, setOrder] = useState([]);

  const [dragging, setDragging] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (id, e) => {
    const shape = shapes.find((s) => s.id === id);
    if (shape) {
      setDragging(id);
      setOffset({
        x: e.clientX - shape.left,
        y: e.clientY - shape.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging !== null) {
      setShapes((prevShapes) =>
        prevShapes.map((shape) =>
          shape.id === dragging
            ? {
              ...shape,
              left: e.clientX - offset.x,
              top: e.clientY - offset.y,
            }
            : shape
        )
      );

      // Update the order based on the dragging sequence
      setOrder((prevOrder) => {
        const updatedOrder = [...prevOrder];
        const draggedIndex = updatedOrder.findIndex((item) => item.id === dragging);

        if (draggedIndex !== -1) {
          // Move the dragged item to the end of the array
          const [draggedItem] = updatedOrder.splice(draggedIndex, 1);
          updatedOrder.push(draggedItem);
        }

        return updatedOrder;
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const addShape = () => {
    if (selectedShape) {
      const newShape = {
        id: Date.now(),
        left: 0,
        top: 0,
        type: selectedShape,
      };

      setShapes((prevShapes) => [...prevShapes, newShape]);
      setOrder((prevOrder) => [...prevOrder, { id: newShape.id, type: newShape.type }]);
    }
  };

  const shapeOptions = ['circle', 'square', 'triangle', 'rectangle', 'hexagon'];

  const getShapeStyles = (shapeType) => {
    switch (shapeType) {
      case 'circle':
        return { width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'yellow' };
      case 'square':
        return { width: '50px', height: '50px', borderRadius: '0', backgroundColor: 'green' };
      case 'triangle':
        return {
          width: '45px',
          height: '45px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          backgroundColor: 'blue',
        };
      case 'rectangle':
        return { width: '80px', height: '50px', borderRadius: '5px', background: 'red' };
      case 'hexagon':
        return {
          width: '100px',
          height: '57.74px',
          backgroundColor: 'purple',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        };
      default:
        return { width: '50px', height: '50px' };
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        background: '#e0e0e0',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'left', flex: 1 }}>
        <h4 style={{ margin: '0 0 20px', color: '#333' }}>Draggable Shapes</h4>
        <div style={{ display: 'flex',rowGap:'0.4rem', flexDirection: 'column', alignItems: 'flex-start' }}>
          {shapeOptions.map((shapeType) => (
            <div
              key={shapeType}
              style={{
                ...getShapeStyles(shapeType),
                margin: '0 0 10px',
                cursor: 'pointer',
                border: '1px solid #333',
              }}
              onClick={() => setSelectedShape(shapeType)}
            ></div>
          ))}
          <br />
          <button
            style={{
              padding: '10px 20px',
              fontSize: '12px',
              cursor: 'pointer',
              background: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              width:'150px'
            }}
            onClick={addShape}
            disabled={!selectedShape}
          >
            Add Shape
          </button>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '800px',
          height: '600px',
          border: '2px solid #ccc',
          background: `linear-gradient(to right, #ccc 1px, transparent 2px),
                       linear-gradient(to bottom, #ccc 1px, transparent 2px)`,
          backgroundSize: '20px 20px',
          overflow: 'hidden',
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              left: shape.left,
              top: shape.top,
              ...getShapeStyles(shape.type),
              cursor: 'move',
              border: '1px solid #333',
            }}
            onMouseDown={(e) => handleMouseDown(shape.id, e)}
          ></div>
        ))}
      </div>
      <div style={{ flex: 1, marginLeft: '2rem' }}>
        <h2 style={{ margin: '0 0 10px', color: '#333' }}>Shape Order</h2>
        <ul style={{ padding: '0', listStyle: 'none', margin: '0' }}>
          {order.map((shape, index) => (
            <li key={shape.id} style={{ marginBottom: '5px', color: '#333' }}>
              {`${index + 1}. Shape ID: ${shape.id}, Type: ${shape.type}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DraggableShape;



