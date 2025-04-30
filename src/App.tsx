import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Post from './components/Post';
import Header from './components/Header';
import { PostType } from './types';
import postsData from './data/posts.json';
import './fonts/fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: '"Instagram Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    background: {
      default: '#fafafa',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

function App() {
  const posts: PostType[] = postsData.posts.map(post => ({
    ...post,
    timestamp: new Date(post.timestamp)
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        minHeight: '100vh'
      }}>
        <Box sx={{ 
          width: '100%',
          maxWidth: '470px',
          pt: '44px',
          backgroundColor: '#fafafa',
          display: 'flex',
          flexDirection: 'column',
          '& > *:not(:last-child)': {
            marginBottom: '12px'
          }
        }}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
