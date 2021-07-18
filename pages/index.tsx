import React from 'react';

import { PageLayout } from '@core/components';
import { HomeHero } from '@home/components';

const Home: React.FC = () => {
    return (
        <PageLayout>
            <HomeHero />
        </PageLayout>
    );
};

export default Home;
