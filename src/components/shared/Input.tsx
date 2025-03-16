'use client';
import { useState, MouseEvent } from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';

export const Input = () => {
  return (
    <TextField
      id='outlined-basic'
      label='Email Address'
      variant='outlined'
      className='w-full'
    />
  );
};

export const ToggleInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl className='w-full !rounded-none' variant='outlined'>
      <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              className='hover:!bg-white'
              aria-label={
                showPassword ? 'hide the password' : 'display the password'
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge='end'
            >
              {showPassword ? (
                <p className='text-xs'>SHOW</p>
              ) : (
                <p className='text-xs'>SHOW</p>
              )}
            </IconButton>
          </InputAdornment>
        }
        label='Password'
      />
    </FormControl>
  );
};

export const ChechBox = () => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked />}
      label='Remember me'
      className='gap-0'
    />
  );
};
