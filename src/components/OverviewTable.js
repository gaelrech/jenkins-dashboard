import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ConfigData from './resource/config.json'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = ConfigData.build.map(build => {    
    return(
      {
        "team": build.team,
      }
    )
  });

export default function OverviewTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="overview table">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>Unit Tests</TableCell>
            <TableCell>Clean Code</TableCell>
            <TableCell>Checkman</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.team}>
              <TableCell component="th" scope="row">{row.team}</TableCell>
              <TableCell>
                <CheckBoxIcon style={{ color: green[500] }} />
              </TableCell>
              <TableCell>
                <WarningIcon  style={{ color: yellow[500] }} />
              </TableCell>
              <TableCell>
                <ErrorIcon  style={{ color: red[500] }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
