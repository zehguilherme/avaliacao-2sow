import React from 'react';
import { useTable } from 'react-table';

export default function Table ({ columns, data }) {
  // Enviar as colunas e dados para montar a tabela

  const {
    getTableProps,     // props da tabela vindo do react-table
    getTableBodyProps, // body props da tabela vindos do react-table
    headerGroups,      // headerGroups, caso a tabela tenha groupings
    rows,              // linhas da tabela baseadas nos dados passados
    prepareRow         // Prepara a linha (essa função deve ser chamada para cada linha antes de obter as props da linha)
  } = useTable({
    columns,
    data
  });

  return (
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
  );
}
