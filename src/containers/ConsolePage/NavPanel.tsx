import React from 'react';

import {useSelector} from 'react-redux';

const NavPanel: React.FC = () => {
  const login = useSelector((state: any) => state.auth.login);
  const sublogin = useSelector((state: any) => state.auth.sublogin);

  return (
    <div className="nav-bar">
      <div className="nav-bar__left-block">
        <img className="logo" src="/icons/logo.svg" alt="logo" />
        <p className="nav-bar__title">API-консолька</p>
      </div>
      <div className="nav-bar__rigth-block">
        <div className="user-bar__user-info">
          <span>{login}</span>
          {sublogin && (
            <>
              <span className="user-bar__user-info__has-sublogin">:</span>
              <span>{sublogin}</span>
            </>
          )}
        </div>
        <div className="nav-bar__logout-block">
          <button className="nav-bar__logout-button">Выйти</button>
          <img src="/icons/log-out.svg" alt="logout" />
        </div>
        <img src="/icons/full-screen.svg" alt="resize to full screen" />
      </div>
    </div>
  );
};

export default NavPanel;
