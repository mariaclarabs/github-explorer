import React from 'react';
import { /* useRouteMatch, */ Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

/* interface RepositoryParams {
  repository: string;
} */

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="" alt="User" />
          <div>
            <strong>Repo</strong>
            <p>Desc</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>55</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>85</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key="key" to="redirect">
          <div>
            <strong>Issue1</strong>
            <p>Blablabla</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
