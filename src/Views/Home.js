import React from 'react';

const Home = ({ user }) => {
    return (
        <div>
            {user?.fullName}
        </div>
    );
};

export default Home;