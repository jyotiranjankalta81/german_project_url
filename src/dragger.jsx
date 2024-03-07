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

  const shapeOptions = ['circle', 'square', 'triangle'];

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {shapeOptions.map((shapeType) => (
          <div
            key={shapeType}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: getShapeColor(shapeType),
              borderRadius: shapeType === 'circle' ? '50%' : '0',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedShape(shapeType)}
          ></div>
        ))}
        <div>
          <button onClick={addShape} disabled={!selectedShape}>
            Add Shape
          </button>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          width: '800px',
          height: '600px',
          border: '1px solid #ccc',
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
              width: '50px',
              height: '50px',
              backgroundColor: getShapeColor(shape.type),
              borderRadius: shape.type === 'circle' ? '50%' : '0',
              cursor: 'move',
            }}
            onMouseDown={(e) => handleMouseDown(shape.id, e)}
          ></div>
        ))}
      </div>
      <div>
        <h2>Shape Order</h2>
        <ul>
          {order.map((shape, index) => (
            <li key={shape.id}>{`${index + 1}. Shape ID: ${shape.id}, Type: ${shape.type}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getShapeColor = (shapeType) => {
  switch (shapeType) {
    case 'circle':
      return 'blue';
    case 'square':
      return 'red';
    case 'triangle':
      return 'green';
    default:
      return 'black';
  }
};

export default DraggableShape;
