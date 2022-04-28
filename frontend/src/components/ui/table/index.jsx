import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const customStyles = {
    headCells: {
      style: {
        padding: '5px',
        fontWeight: 'bold',
        borderTop: '2px solid #DEDEDE',
        borderBottom: '2px solid #DEDEDE',
      },
    },
};

const paginacionOpciones={
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function Table(props) {

  const tableData = {
    dense: true,
    noDataComponent:	'No se encontraron resultados',
  };

  const tableDataExtensions = {
    filterPlaceholder: 'Buscar',
    exportHeaders: true,
    export: false,
    print: false,
    columns: props.columns,
    data: props.data
  };
  
    return (
      <div className="main">
        <DataTableExtensions {...tableDataExtensions}>
          <DataTable {...tableData}
            columns={props.columns}
            data={props.data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            paginationComponentOptions={paginacionOpciones}
            highlightOnHover
            customStyles={customStyles}
          />
        </DataTableExtensions>
      </div>
    );
};

export default Table;