import { NextPage } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Header: NextPage = () => {
  return (
    <nav role='navigation' aria-label='main navigation'>
      <div className='container mx-auto p-5'>
        <div className='flex items-center justify-between'>
          <div>
            <Link
              href='/'
              className='font-bold text-purple-600 hover:text-purple-300 focus:text-purple-300'
            >
              Tenkir
            </Link>
          </div>
          <div>
            <a
              href='https://note.com/_at_946/n/nb84babf02d87'
              className='hover:text-purple-600 focus:text-purple-600'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faMugHot} className='mr-2' />
              <span>開発者を支援</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
