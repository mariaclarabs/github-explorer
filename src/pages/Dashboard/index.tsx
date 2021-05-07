import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars.githubusercontent.com/u/39465910?v=4"
            alt="userImg"
          />
          <div>
            <strong>mariaclarabs/go-barber</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars.githubusercontent.com/u/39465910?v=4"
            alt="userImg"
          />
          <div>
            <strong>mariaclarabs/go-barber</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars.githubusercontent.com/u/39465910?v=4"
            alt="userImg"
          />
          <div>
            <strong>mariaclarabs/go-barber</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
