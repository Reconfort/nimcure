'use client';
import { useState, MouseEvent } from 'react';

import {
  FormControl,
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
      className='w-full !h-[60px]'
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
    <FormControl className='w-full !h-[60px]' variant='outlined'>
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
                <p className='text-xs'>HIDE</p>
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
  const [checked, setChecked] = useState(false);
  return (
    <div
      className='flex items-center gap-2 cursor-pointer group'
      onClick={() => setChecked(!checked)}
    >
      <button className='bg-white w-7 h-7 border-[2px] flex items-center justify-center border-black rounded-md  group-hover:scale-110'>
        {checked && <div className='bg-black w-5 h-5 rounded-sm'></div>}
      </button>
      <p className='text-black text-sm font-medium'>Remember me</p>
    </div>
  );
};
