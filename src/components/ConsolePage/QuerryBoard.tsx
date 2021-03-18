import React from 'react';
import {Resizable} from 're-resizable';
import dots from "./images/history-dots.svg"

const QuerryBoard: React.FC = () => {
  return (
    <div className="querry-board">
      <div className="request-block">
        <span>Запрос:</span>
        <Resizable
          className="request-block__info-field"
          defaultSize={{
            width: 700,
            height: '96%',
          }}
          enable={{
            top: false,
            right: true,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          minWidth={200}
          maxWidth={'80vw'}
        >
          <input className="request-block__input" type="text" placeholder="Your querry" />
        </Resizable>
        <img className="querry-board__dots" src={dots} alt="resizing dots"/>
      </div>
      <div className="response-block">
        <span>Ответ:</span>
        <div className="response-block__info-field">222</div>
      </div>
    </div>
  );
};

export default QuerryBoard;
