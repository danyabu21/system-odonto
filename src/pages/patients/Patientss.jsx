import React from "react";
import * as S from "./style";
import useStore from "../../stores/useStore";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Nome", minWidth: 170 },
  { id: "insurance", label: "Convênio", minWidth: 100, align: "center" },
  {
    id: "insuranceNumber",
    label: "Nº da Carteira",
    minWidth: 170,
    align: "center",
  },
  {
    id: "cid",
    label: "CID",
    minWidth: 170,
    align: "center",
  },
  {
    id: "actions",
    label: "Ações",
    minWidth: 170,
    align: "center",
  },
];

const Patients = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { sidebarIsOpen, patientsData } = useStore((store) => store.state);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <S.Patients $sidebar={sidebarIsOpen}>
      <Typography
        sx={{ fontFamily: "Roboto Slab , sans-serif", margin: "1rem 0" }}
        variant="h5"
        component="h2"
      >
        Pacientes Cadastrados
      </Typography>
      {patientsData.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "100vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {patientsData.map((patient, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column, idx) => {
                        return (
                          <TableCell
                            className="table-cel"
                            key={column.id}
                            align={column.align}
                          >
                            {patient[column.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={patientsData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Pacientes por página: "
          />
        </Paper>
      ) : (
        <p>Nenhum Paciente Cadastrado</p>
      )}
    </S.Patients>
  );
};

export default Patients;
