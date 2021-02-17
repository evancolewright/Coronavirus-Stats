import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './SearchBox.css';
import { getTotalCounts } from '../../api';

export default function SearchBox({ countries, setData, setCurrentCountry }) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={countries}
      onChange={(event, value) => {
        if (value === null || value.name === null) {
          getTotalCounts().then((data) => setData(data));
          setCurrentCountry(null);
          return;
        }
        setCurrentCountry(value.name);
        getTotalCounts(value.name).then((data) => setData(data));
      }}
      getOptionLabel={(option) => option.name}
      style={{ width: '75%', margin: '3rem  auto' }}
      renderInput={(params) => (
        <TextField
          className="texty"
          {...params}
          margin="normal"
          label="Filter By Country"
          variant="outlined"
          style={{ color: 'white' }}
        />
      )}
    />
  );
}
