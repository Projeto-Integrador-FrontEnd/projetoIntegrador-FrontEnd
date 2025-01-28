import { useState } from "react";

const Usuario = () => {
    const [search, setSearch] = useState('');
    const usuarios = [
        { id: 1, nome: 'João Silva', salario: 5000, desconto: 500, horasTrabalhadas: 160, cargo: 'Desenvolvedor', departamento: 'TI', admissao: '2020-03-15', ativo: true },
        { id: 2, nome: 'Maria Souza', salario: 7000, desconto: 700, horasTrabalhadas: 160, cargo: 'Gerente', departamento: 'RH', admissao: '2018-07-12', ativo: false },
        { id: 3, nome: 'Carlos Oliveira', salario: 4500, desconto: 400, horasTrabalhadas: 150, cargo: 'Analista de Suporte', departamento: 'TI', admissao: '2021-01-20', ativo: true },
        { id: 4, nome: 'Fernanda Lima', salario: 6500, desconto: 650, horasTrabalhadas: 170, cargo: 'Analista de Recursos Humanos', departamento: 'RH', admissao: '2019-05-10', ativo: true },
        { id: 5, nome: 'Pedro Martins', salario: 8000, desconto: 800, horasTrabalhadas: 160, cargo: 'Coordenador', departamento: 'TI', admissao: '2017-08-25', ativo: false },
        { id: 6, nome: 'Luana Ferreira', salario: 5500, desconto: 550, horasTrabalhadas: 165, cargo: 'Assistente Administrativo', departamento: 'Financeiro', admissao: '2022-06-15', ativo: true },
        { id: 7, nome: 'Ricardo Alves', salario: 4800, desconto: 480, horasTrabalhadas: 155, cargo: 'Desenvolvedor Front-End', departamento: 'TI', admissao: '2021-04-22', ativo: true },
        { id: 8, nome: 'Julia Costa', salario: 6000, desconto: 600, horasTrabalhadas: 160, cargo: 'Designer Gráfico', departamento: 'Marketing', admissao: '2020-11-05', ativo: true },
        { id: 9, nome: 'Lucas Pereira', salario: 4000, desconto: 400, horasTrabalhadas: 140, cargo: 'Estagiário', departamento: 'Financeiro', admissao: '2023-02-10', ativo: true },
        { id: 10, nome: 'Ana Clara Rocha', salario: 7200, desconto: 720, horasTrabalhadas: 160, cargo: 'Gerente de Projetos', departamento: 'TI', admissao: '2018-09-30', ativo: true },
        { id: 11, nome: 'Bruno Santos', salario: 6000, desconto: 600, horasTrabalhadas: 160, cargo: 'Analista de Sistemas', departamento: 'TI', admissao: '2019-12-05', ativo: false },
        { id: 12, nome: 'Mariana Alves', salario: 7500, desconto: 750, horasTrabalhadas: 175, cargo: 'Coordenadora de Marketing', departamento: 'Marketing', admissao: '2016-08-19', ativo: true },
        { id: 13, nome: 'Gustavo Ramos', salario: 5500, desconto: 550, horasTrabalhadas: 160, cargo: 'Analista Financeiro', departamento: 'Financeiro', admissao: '2020-03-18', ativo: true },
        { id: 14, nome: 'Larissa Silva', salario: 5300, desconto: 530, horasTrabalhadas: 150, cargo: 'Assistente de TI', departamento: 'TI', admissao: '2022-07-10', ativo: true },
        { id: 15, nome: 'Felipe Costa', salario: 4800, desconto: 480, horasTrabalhadas: 160, cargo: 'Auxiliar Administrativo', departamento: 'Financeiro', admissao: '2021-05-23', ativo: false },
        { id: 16, nome: 'Patricia Santos', salario: 7200, desconto: 720, horasTrabalhadas: 160, cargo: 'Gerente Financeiro', departamento: 'Financeiro', admissao: '2019-09-12', ativo: true },
        { id: 17, nome: 'Thiago Oliveira', salario: 5100, desconto: 510, horasTrabalhadas: 160, cargo: 'Desenvolvedor Full-Stack', departamento: 'TI', admissao: '2020-02-28', ativo: true },
        { id: 18, nome: 'Sofia Pereira', salario: 6300, desconto: 630, horasTrabalhadas: 165, cargo: 'Coordenadora de RH', departamento: 'RH', admissao: '2017-10-15', ativo: true },
        { id: 19, nome: 'Gabriel Rocha', salario: 4900, desconto: 490, horasTrabalhadas: 145, cargo: 'Assistente de Marketing', departamento: 'Marketing', admissao: '2021-11-01', ativo: false },
        { id: 20, nome: 'Isabela Oliveira', salario: 5800, desconto: 580, horasTrabalhadas: 160, cargo: 'Analista de Marketing', departamento: 'Marketing', admissao: '2018-03-14', ativo: true }
    ];

    const filteredUsuarios = usuarios.filter(usuario => usuario.nome.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="p-6 bg-[#FFF] min-h-screen">
            <h1 className="text-3xl font-semibold text-[#202D39] mb-6">Usuários</h1>
            
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-4 border border-[#9CB8C7] rounded-lg w-full max-w-md"
                />
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto text-sm text-left text-[#202D39]">
                    <thead className="bg-[#9CB8C7] text-white">
                        <tr>
                            <th className="px-4 py-3 font-medium">Nome</th>
                            <th className="px-4 py-3 font-medium">Cargo</th>
                            <th className="px-4 py-3 font-medium">Departamento</th>
                            <th className="px-4 py-3 font-medium">Salário</th>
                            <th className="px-4 py-3 font-medium">Desconto</th>
                            <th className="px-4 py-3 font-medium">Horas Trabalhadas</th>
                            <th className="px-4 py-3 font-medium">Admissão</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsuarios.map(usuario => (
                            <tr key={usuario.id} className="border-t hover:bg-[#F4F4F4]">
                                <td className="px-4 py-3">{usuario.nome}</td>
                                <td className="px-4 py-3">{usuario.cargo}</td>
                                <td className="px-4 py-3">{usuario.departamento}</td>
                                <td className="px-4 py-3">R$ {usuario.salario.toFixed(2)}</td>
                                <td className="px-4 py-3">R$ {usuario.desconto.toFixed(2)}</td>
                                <td className="px-4 py-3">{usuario.horasTrabalhadas}h</td>
                                <td className="px-4 py-3">{new Date(usuario.admissao).toLocaleDateString()}</td>
                                <td className={`px-4 py-3 ${usuario.ativo ? 'text-green-600' : 'text-red-600'}`}>
                                    {usuario.ativo ? 'Ativo' : 'Inativo'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Usuario;
