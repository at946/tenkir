import { NextPage } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Header: NextPage = () => {
  return (
    <nav className='navbar px-5' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link
            href='/'
            className='navbar-item has-text-primary has-text-weight-bold'
            data-testid='logo'
          >
            Tenkir
          </Link>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <a
              href='https://note.com/_at_946/n/nb84babf02d87'
              className='navbar-item'
              target='_blank'
              rel='noreferrer'
              data-testid='support'
            >
              <FontAwesomeIcon icon={faMugHot} className='mr-1' />
              <span>support</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
