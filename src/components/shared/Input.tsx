'use client';
import { useState, MouseEvent } from 'react';

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField
} from '@mui/material';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { LuSearch } from 'react-icons/lu';
import { FaChevronDown } from 'react-icons/fa6';

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

export const Search = () => {
  return (
    <FormControl
      fullWidth
      sx={{ m: 1 }}
      className='border !border-[#CFCFCF] !h-[40px] !w-[200px] lg:!w-[290px]'
    >
      <OutlinedInput
        id='outlined-adornment-amount'
        startAdornment={
          <InputAdornment position='start'>
            <LuSearch />
          </InputAdornment>
        }
        placeholder='Search by patient name, id'
        className='!h-[40px]'
      />
    </FormControl>
  );
};

export const SelectInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((show) => !show);
  return (
    <section className='flex flex-col gap-2 relative'>
      {/* Toggle Info */}
      <div
        className='flex justify-center items-center gap-2 py-3 group cursor-pointer relative z-20'
        onClick={toggleDropdown}
      >
        <div className='flex justify-center items-center gap-1'>
          <h2 className='text-slate-800 group-hover:text-black font-semibold'>
            Hospital ID
          </h2>
          <FaChevronDown
            className={`scale-90 ${showDropdown ? '-rotate-180' : 'rotate-0'}`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full absolute !mt-[3rem] flex justify-start items-start z-10 bg-[#F9F9F9] ${
          showDropdown
            ? 'translate-y-0 opacity-100'
            : '-translate-y-8 opacity-0'
        }`}
      >
        <p className='p-2 hover:text-[#1F5AF4] cursor-pointer'>#1F5AF4</p>
      </div>
    </section>
  );
};
