import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from '../../Redux/actions';

export default function CartsOptions() {
  const [cuurentCart, setCuurentCart] = React.useState('');
  const [cartsOptions, setCartsOptions] = React.useState([]); 
  const dispatch = useDispatch(); 
  const cartsNames = useSelector((state: any) => state?.carts?.cartsNames); 

  React.useEffect (()=>{
    setCartsOptions(cartsNames); 
  }, [cartsNames])


  const handleChange = (event: SelectChangeEvent) => {
    setCuurentCart(event.target.value);
    dispatch(selectCart(event.target.value)); 
  };

  return (
    <FormControl fullWidth sx={{  minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Carts</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={cuurentCart}
        label="Carts"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          cartsOptions.map((option)=>{
            return (
              <MenuItem value={option}>{option}</MenuItem>
            ); 
          })
        }
      </Select>
    </FormControl>
  );
}