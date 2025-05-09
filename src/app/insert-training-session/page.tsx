"use client";

import { JSX } from 'react';

import { Box } from '@mui/material';

import LeftBar from '@/app/components/LeftBar';
import InsertTrainingSessionForm from '@/app/components/InsertTrainingSessionForm';
import ApplicationBar from '@/app/components/ApplicationBar';
import NewTrainingSessionMessageOnInsert from '@/app/components/NewTrainingSessionMessageOnInsert';

import useIsClient from '@/app/hooks/useIsClient';
import useIsMobile from '@/app/hooks/useIsMobile';
import useShowLeftBar from '@/app/hooks/useShowLeftBar';
import checkIfUserLoggedIn from '@/app/hooks/useCheckIfUserLoggedIn';

export default function NewTrainingSession(): JSX.Element | undefined {
    const { isClient } = useIsClient();
    const { isMobile } = useIsMobile();
    const { showLeftBar, toggleShowLeftBar } = useShowLeftBar({ isMobile });

    const { user } = checkIfUserLoggedIn();

    if (!isClient) {
        return;
    }

    return (
        <Box sx={{ display: 'flex' }}>

            <LeftBar showLeftBar={showLeftBar} toggleShowLeftBar={toggleShowLeftBar} />

            <Box sx={{
                flexGrow: 1,
                marginLeft: isMobile ? 0 : "240px",
                minHeight: '100vh',
            }}>

                <ApplicationBar toggleShowLeftBar={toggleShowLeftBar} />

                {user && <InsertTrainingSessionForm user={user} />}
                <NewTrainingSessionMessageOnInsert />

            </Box>

            
        </Box>
    );
}
