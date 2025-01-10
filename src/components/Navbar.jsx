'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import { Search, FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('English'); 
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) setLanguage(lang);
  };

  return (
    <div>

      <AppBar position="static" sx={{ backgroundColor: '#000000', height: '48px', justifyContent: 'center' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="inherit">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <a href="/shopNow" style={{ color: '#FFD700', textDecoration: 'underline' }}>
              ShopNow
            </a>
          </Typography>
          <Button
            onClick={handleClick}
            variant="text"
            sx={{ color: 'white', textTransform: 'none', fontSize: '14px' }}
          >
            {language} ▾
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
            <MenuItem onClick={() => handleClose('English')}>English</MenuItem>
            <MenuItem onClick={() => handleClose('Русский')}>Русский</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>


      <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none', paddingY: '8px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
           <a href="/">Exclusive</a> 
          </Typography>

          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button sx={{ color: 'black', textTransform: 'none' }}>Home</Button>
            <Button sx={{ color: 'black', textTransform: 'none' }}>Contact</Button>
            <Button sx={{ color: 'black', textTransform: 'none' }}>About</Button>
            <Button
              variant="outlined"
              sx={{
                color: 'black',
                borderColor: 'black',
                textTransform: 'none',
                borderRadius: '20px',
                paddingX: '16px',
              }}
            >
              Sign Up
            </Button>
          </div>

    
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '20px',
                padding: '4px 12px',
              }}
            >
              <InputBase
                placeholder="What are you looking for?"
                sx={{ fontSize: '14px', flexGrow: 1, color: 'black' }}
              />
              <IconButton>
                <Search />
              </IconButton>
            </div>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlined />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
