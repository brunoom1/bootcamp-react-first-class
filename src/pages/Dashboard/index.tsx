import React from "react";


import { Title, Form, Repositories } from "./../../assets/styles";
import Layout from "./../Layout/index";
import { AiOutlineRight } from "react-icons/ai";


const Dashboard: React.FC = () => <Layout>
  <Title>Explore repositórios no Github.</Title>

  <Form>
    <input placeholder="O que deseja buscar?" />
    <button>Buscar agora!</button>
  </Form>

  <Repositories>
    <a href="/repositorie">
      <img src="https://avatars1.githubusercontent.com/u/863357?s=460&u=6677f2c12db7bb0db6d51f3ce097f310f5a5a9bb&v=4" alt="Gabriel Mendonça" />

      <span>
        <h2> brunoom1/gostack-typeorm-upload </h2>
        <p> repositório cheio de bagunça </p>
      </span>

      <AiOutlineRight className="icon" />
    </a>

    <a href="/repositorie">
      <img src="https://avatars1.githubusercontent.com/u/863357?s=460&u=6677f2c12db7bb0db6d51f3ce097f310f5a5a9bb&v=4" alt="Gabriel Mendonça" />

      <span>
        <h2> brunoom1/gostack-typeorm-upload </h2>
        <p> repositório cheio de bagunça </p>
      </span>

      <AiOutlineRight className="icon" />
    </a>

    <a href="/repositorie">
      <img src="https://avatars1.githubusercontent.com/u/863357?s=460&u=6677f2c12db7bb0db6d51f3ce097f310f5a5a9bb&v=4" alt="Gabriel Mendonça" />

      <span>
        <h2> brunoom1/gostack-typeorm-upload </h2>
        <p> repositório cheio de bagunça </p>
      </span>

      <AiOutlineRight className="icon" />
    </a>
  </Repositories>

</Layout>;


export default Dashboard;