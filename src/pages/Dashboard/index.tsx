import React, { FormEvent, useState } from "react";


import { Title, Form, Repositories, Error } from "./../../assets/styles";
import Layout from "./../Layout/index";
import { AiOutlineRight } from "react-icons/ai";
import api from "../../services/api";

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string,
    url: string,
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [error, setError] = useState<string>("");

  const repositorySearch = async (evt: FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    const repository = formData.get('repository');

    if (!repository) {
      setError("Digite o repositório que deseja buscar no formato nome/repo");
      return;
    }

    try {
      const { status, data } = await api.get<Repository>(`/repos/${repository}`)

      if (status === 200) {
        const repos = [...repositories, data];

        setRepositories(repos);
        setError("");
      }
    } catch {
      setError("Houve um erro na sua busca");
    }

    form.reset();
  }

  return <Layout>
    <Title>Explore repositórios no Github.</Title>

    <Form hasError={!!error} onSubmit={repositorySearch}>
      <input placeholder="O que deseja buscar?" name="repository" />
      <button>Buscar agora!</button>
    </Form>

    {error && <Error> {error} </Error>}

    <Repositories>
      {repositories.map((rep: Repository) =>
        <a href="/repositorie">
          <img src={rep.owner.avatar_url} alt={rep.owner.login} />

          <span>
            <h2> {rep.full_name} </h2>
            <p> {rep.description} </p>
          </span>

          <AiOutlineRight className="icon" />
        </a>
      )}

    </Repositories>

  </Layout>;
}

export default Dashboard;