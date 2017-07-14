import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';

const InnerButton = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    margin-right: 0.5rem;
`;


const UserButton = ({user, getLoginPage, onLogout, ...props}) => {
    console.log('userButton', user)
    return (
        <div>
            {user &&
                <Button {...props} onClick={onLogout}>
                    <InnerButton>
                        <Image src={user.picture} width={20} height={20}/>
                        Déconnecter
                    </InnerButton>
                </Button>
            }
            {!user && <Button {...props} onClick={getLoginPage} >Connecter</Button>}
        </div>
    )
};

UserButton.propTypes = {
    user: PropTypes.shape({
        picture: PropTypes.string.isRequired
    }),
    getLoginPage: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default UserButton;