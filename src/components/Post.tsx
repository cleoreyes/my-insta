import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  Avatar,
  Typography, 
  Box,
  IconButton,
} from '@mui/material';
import { 
  Favorite, 
  FavoriteBorder,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Circle,
  CircleOutlined
} from '@mui/icons-material';
import { PostType } from '../types';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 39);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? post.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === post.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Card sx={{ 
      width: '100%',
      borderRadius: 0,
      boxShadow: '0 0 1px rgba(0,0,0,0.2)',
      backgroundColor: '#ffffff'
    }}>
      <CardHeader
        avatar={
          <Avatar 
            src={post.profilePicture}
            sx={{ 
              width: 42, 
              height: 42,
              border: '1px solid #dbdbdb'
            }}
          >
            {post.username[0].toUpperCase()}
          </Avatar>
        }
        title={
          <Typography sx={{ 
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '.01em'
          }}>
            {post.username}
          </Typography>
        }
        sx={{ 
          py: 1.5,
          '& .MuiCardHeader-content': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      />
      <Box 
        sx={{ 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            display: 'flex'
          }}
        >
          <CardMedia
            component="img"
            image={post.images[currentImageIndex]}
            alt={`Post image ${currentImageIndex + 1}`}
            sx={{ 
              width: '100%',
              height: 'auto',
              backgroundColor: '#fafafa',
              flexShrink: 0
            }}
          />
        </Box>
        {post.images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
              }}
            >
              <KeyboardArrowRight />
            </IconButton>
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1,
              }}
            >
              {post.images.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {index === currentImageIndex ? (
                    <Circle sx={{ fontSize: 8 }} />
                  ) : (
                    <CircleOutlined sx={{ fontSize: 8 }} />
                  )}
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
      <CardActions disableSpacing sx={{ px: 2, pt: 1, pb: 0 }}>
        <IconButton 
          onClick={handleLike}
          sx={{ 
            '&:hover': { 
              backgroundColor: 'transparent' 
            }
          }}
        >
          {isLiked ? (
            <Favorite sx={{ color: '#ed4956' }} />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </CardActions>
      <CardContent sx={{ p: 2, pt: 1 }}>
        <Typography sx={{ 
          fontSize: '14px',
          fontWeight: 500,
          mb: 1
        }}>
          {likesCount} likes
        </Typography>
        <Typography sx={{ 
          fontSize: '14px',
          mb: 1,
          lineHeight: 1.3,
          letterSpacing: '.01em'
        }}>
          <Box component="span" sx={{ fontWeight: 600, mr: 1 }}>
            {post.username}
          </Box>
          {post.caption}
        </Typography>
        <Typography color="text.secondary" sx={{ 
          fontSize: '12px',
          letterSpacing: '.01em'
        }}>
          {new Date(post.timestamp).toLocaleDateString('en-US', { 
            month: 'long',
            day: 'numeric'
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post; 