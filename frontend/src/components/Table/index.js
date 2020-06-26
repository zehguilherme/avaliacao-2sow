import React, { useState } from 'react';
import { useTable, useFilters } from 'react-table';

export default function Table ({ columns, data }) {
  // Enviar as colunas e dados para montar a tabela

  const [filterInput, setFilterInput] = useState(''); //Guarda as informações do input de filtro

  // Atualiza o estado quando houver mudanças no input
  function handleFilterChange (e) {
    const value = e.target.value || undefined;

    // quando o valor do input muda, deve-se colocar no 1º parâmetro a coluna "accessor" e no 2º o valor do filtro da busca
    setFilter('nome', value);
    setFilterInput(value);
  }

  const {
    getTableProps,     // props da tabela vindo do react-table
    getTableBodyProps, // body props da tabela vindos do react-table
    headerGroups,      // headerGroups, caso a tabela tenha groupings
    rows,              // linhas da tabela baseadas nos dados passados
    prepareRow,        // Prepara a linha (essa função deve ser chamada para cada linha antes de obter as props da linha)
    setFilter          // O useFilter fornece uma maneira de definir um filtro (setFilter)
  } = useTable({
    columns,
    data
  },
    useFilters
  );

  return (
    <>
      <input
        type="text"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Filtrar por nome"
      />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);  // prepara as linhas e pega as suas props do react-table dinamicamente

            // Cada linha pode ser renderizada diretamente como uma string usando o método de renderização do react-table
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
