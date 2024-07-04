import { Add, Remove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

export const PeopleServing = () => {
    const [count, setCount] = useState(0);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
            }}
        >
            <IconButton
                onClick={() => {
                    setCount(Math.max(count - 1, 0));
                }}
            >
                <Remove fontSize="small" />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    width: 88,
                }}
            >
                <Typography>{count}</Typography>
                {count === 0 ? (
                    <Typography>personne</Typography>
                ) : (
                    <Typography>personnes</Typography>
                )}
            </Box>
            <IconButton
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                <Add fontSize="small" />
            </IconButton>
        </Box>
    );
};
