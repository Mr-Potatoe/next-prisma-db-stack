'use client';

import { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorId, setAuthorId] = useState<number | ''>('');
    const [users, setUsers] = useState<any[]>([]);

    // Fetch users for the select dropdown
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleCreatePost = async () => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, authorId }),
        });

        const data = await response.json();
        console.log('Created Post:', data);
        setTitle('');
        setContent('');
        setAuthorId('');
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Create Post
            </Typography>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Author</InputLabel>
                <Select
                    value={authorId}
                    onChange={(e) => setContent(e.target.value.toString())}
                    label="Author"
                >
                    {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreatePost}
                sx={{ width: '100%' }}
            >
                Create Post
            </Button>
        </Box>
    );
};

export default CreatePost;
