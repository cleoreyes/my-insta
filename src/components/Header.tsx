import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid #dbdbdb',
        backgroundColor: 'white'
      }}
    >
      <Toolbar sx={{ 
        minHeight: '44px !important',
        px: '16px',
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center'
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: '16px',
              fontWeight: 600,
              textAlign: 'center',
              letterSpacing: '.01em'
            }}
          >
            Posts
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 