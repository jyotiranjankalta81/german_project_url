import React, { useState } from 'react';

const DraggableShape = () => {
  const [shapes, setShapes] = useState([]);
  const [order, setOrder] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('shapeId', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropLeft = (e) => {
    e.preventDefault();
    const shapeId = e.dataTransfer.getData('shapeId');
    const { clientX, clientY } = e;
    const newShape = {
      id: shapeId,
      left: clientX,
      top: clientY,
      type: shapeId,
    };

    setShapes((prevShapes) => [...prevShapes, newShape]);
    setOrder((prevOrder) => [...prevOrder, { id: newShape.id, type: newShape.type }]);
  };

  const handleDropMain = (e) => {
    e.preventDefault();
    const shapeId = e.dataTransfer.getData('shapeId');
    const { clientX, clientY } = e;

    const updatedShapes = shapes.map((shape) =>
      shape.id === shapeId ? { ...shape, left: clientX, top: clientY } : shape
    );

    setShapes(updatedShapes);
    setOrder(updatedShapes.map(({ id, type }) => ({ id, type })));
  };

  const addShape = (shapeType) => {
    const newShape = {
      id: Date.now().toString(),
      left: 0,
      top: 0,
      type: shapeType,
    };

    setShapes((prevShapes) => [...prevShapes, newShape]);
    setOrder((prevOrder) => [...prevOrder, { id: newShape.id, type: newShape.type }]);
  };

  const shapeOptions = ['circle', 'square', 'triangle'];

  return (
    <div style={{ display: 'flex' }}>
      <div onDragOver={handleDragOver} onDrop={handleDropLeft}>
        {shapeOptions.map((shapeType) => (
          <div
            key={shapeType}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: getShapeColor(shapeType),
              borderRadius: shapeType === 'circle' ? '50%' : '0',
              margin: '0 5px',
              cursor: 'grab',
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, shapeType)}
          ></div>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          width: '800px',
          height: '600px',
          border: '1px solid #ccc',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDropMain}
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
            draggable
            onDragStart={(e) => handleDragStart(e, shape.id)}
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
