import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material"

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px', maxWidth: '600px'}} className='Components'>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell >Id</TableCell>
            <TableCell >First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell align="center">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.first_name}</TableCell>
              <TableCell >{row.last_name}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData = [
  {
    "id": 1,
    "first_name": "Uriah",
    "last_name": "Codrington",
    "email": "ucodrington0@home.pl",
    "gender": "Male",
    "ip_address": "46.73.31.210"
  }, {
    "id": 2,
    "first_name": "Terrye",
    "last_name": "Blenkensop",
    "email": "tblenkensop1@angelfire.com",
    "gender": "Female",
    "ip_address": "148.92.187.235"
  }, {
    "id": 3,
    "first_name": "Allegra",
    "last_name": "Daly",
    "email": "adaly2@pinterest.com",
    "gender": "Female",
    "ip_address": "92.0.151.177"
  }, {
    "id": 4,
    "first_name": "Gibbie",
    "last_name": "Trude",
    "email": "gtrude3@constantcontact.com",
    "gender": "Male",
    "ip_address": "153.1.244.104"
  }, {
    "id": 5,
    "first_name": "Brandon",
    "last_name": "Stainer",
    "email": "bstainer4@naver.com",
    "gender": "Male",
    "ip_address": "58.97.207.156"
  }, {
    "id": 6,
    "first_name": "Innis",
    "last_name": "Bestiman",
    "email": "ibestiman5@facebook.com",
    "gender": "Male",
    "ip_address": "73.149.58.151"
  }, {
    "id": 7,
    "first_name": "Janelle",
    "last_name": "Rookeby",
    "email": "jrookeby6@google.co.jp",
    "gender": "Female",
    "ip_address": "194.199.218.18"
  }, {
    "id": 8,
    "first_name": "Nola",
    "last_name": "Cauderlie",
    "email": "ncauderlie7@imdb.com",
    "gender": "Female",
    "ip_address": "31.223.156.69"
  }, {
    "id": 9,
    "first_name": "Sky",
    "last_name": "Raison",
    "email": "sraison8@angelfire.com",
    "gender": "Male",
    "ip_address": "211.13.219.12"
  }, {
    "id": 10,
    "first_name": "Alecia",
    "last_name": "Payle",
    "email": "apayle9@archive.org",
    "gender": "Female",
    "ip_address": "248.38.251.54"
  }
]