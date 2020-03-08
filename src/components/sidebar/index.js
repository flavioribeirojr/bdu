import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ON_SEARCH_RESULT_SELECTED } from '../../events/search';
import Search from '../search';
import style from './sidebar.module.scss';
import BDULogo from '../../images/bdu.png';

const socialMedias = [
  {
    href: 'https://twitter.com/flavioribeirojr',
    icon: faTwitter
  },
  {
    href: 'https://www.linkedin.com/in/fl%C3%A1vio-j%C3%BAnior/',
    icon: faLinkedin
  },
  {
    href: 'https://github.com/flavioribeirojr',
    icon: faGithub
  },
  {
    href: 'https://www.instagram.com/flaviorlj/',
    icon: faInstagram
  }
];

const navigation = [
  {
    name: 'BLOG',
    url: '/'
  },
  {
    name: 'CONTATO',
    url: '/contact'
  }
];

function Sidebar() {
  const [ showMobileSidebar, setShowMobileSidebar ] = useState(false);

  useEffect(function () {
    document.addEventListener(ON_SEARCH_RESULT_SELECTED, toggleMobileSidebar);

    return function () {
      document.removeEventListener(ON_SEARCH_RESULT_SELECTED, toggleMobileSidebar);
    }
  });

  return (
    <aside className={getSidebarClassName()}>
      <div className={style.logo}>
        <img src={BDULogo} alt="Borda do Universo" />
        <h1 className={style.brand}>
          BORDA DO <br />
          UNIVERSO
        </h1>
        <button className={style.sidebarToggle} onClick={toggleMobileSidebar}>
          <FontAwesomeIcon
            className={style.sidebarToggleIcon}
            icon={faBars}
          />
        </button>
      </div>
      <form className={style.sidebarSearch}>
        <div className={style.sidebarSearchWrapper}>
          <Search /> 
        </div>
      </form>
      <nav className={style.sidebarNav}>
        <ul className={style.sidebarNavList}>
          {
            navigation
              .map((navigationItem, index) => (
                <li
                  key={`${navigationItem.url}-${index}`}
                  className={style.sidebarNavListItem}
                >
                  <Link
                    to={navigationItem.url}
                    className={style.sidebarNavListItemLink}
                  >
                    { navigationItem.name }
                  </Link>
                </li>
              ))
          }
        </ul>
      </nav>
      <div className={style.sidebarFooter}>
        <address className={style.sidebarFooterContact}>
          <p className={style.sidebarFooterContactName}>
            Flávio Ribeiro
          </p>
          <div className={style.sidebarFooterContactMedia}>
            {
              socialMedias
                .map((socialMedia, index) => (
                  <a
                    href={socialMedia.href}
                    rel="noopener noreferrer"
                    target="blank"
                    key={index}
                  >
                    <FontAwesomeIcon className={style.sidebarFooterContactMediaIcon} icon={socialMedia.icon} />
                  </a>
                ))
            }
          </div>
        </address>
        <div className={`${style.sidebarFooterStroke}`}>
          <div className={style.sidebarFooterStrokeBack} />
          <div className={style.sidebarFooterStrokeBar} />
        </div>
        <div className={`${style.sidebarFooterStroke}`}>
          <div className={style.sidebarFooterStrokeBack} />
          <div className={style.sidebarFooterStrokeBar} />
        </div>
      </div>
    </aside>
  );

  function getSidebarClassName() {
    return `${style.sidebar} ${ showMobileSidebar ? style.showMobileSidebar : '' }`;
  }

  function toggleMobileSidebar() {
    setShowMobileSidebar(!showMobileSidebar);
  }
}

export default Sidebar;