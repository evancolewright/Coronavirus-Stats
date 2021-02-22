import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getTotalCounts } from '../../API';

export default function SearchBox({ countries, setData, setCurrentCountry }) {
  return (
    <Autocomplete
      id="search-box"
      options={countries}
      onChange={(event, value) => {
        // If text box is empty, set to global
        if (value === null || value.name === null) {
          getTotalCounts().then((data) => setData(data));
          setCurrentCountry(null);
          return;
        }
        const { name } = value;
        setCurrentCountry(name);
        getTotalCounts(name).then((data) => setData(data));
      }}
      getOptionLabel={(option) => option.name}
      style={{ width: '75%', margin: '4rem auto' }}
      renderInput={(params) => (
        <TextField
          id="search-box-textfield"
          {...params}
          margin="normal"
          label="Filter By Country"
          variant="outlined"
          style={{
            color: 'white',
            width: '60%',
            margin: '0 auto',
            display: 'block',
          }}
        />
      )}
    />
  );
}
