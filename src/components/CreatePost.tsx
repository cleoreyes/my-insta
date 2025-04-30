import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { PostType } from '../types';

interface CreatePostProps {
  onAddPost: (post: PostType) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onAddPost }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [caption, setCaption] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || !caption || !username) return;

    const newPost: PostType = {
      id: Date.now().toString(),
      images: [imageUrl],
      profilePicture,
      caption,
      username,
      timestamp: new Date(),
      likes: 0
    };

    onAddPost(newPost);
    setImageUrl('');
    setCaption('');
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Create New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Profile Picture URL"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            margin="normal"
            helperText="Add profile picture from public/images folder (e.g., /images/profile.jpg)"
          />
          <TextField
            fullWidth
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            margin="normal"
            required
            helperText="Add image from public/images folder (e.g., /images/your-image.jpg)"
          />
          <TextField
            fullWidth
            label="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            margin="normal"
            multiline
            rows={3}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Post
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost; 