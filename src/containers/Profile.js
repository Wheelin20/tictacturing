import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component
{
    static defaultProps =
    {
        user: 
        {
            email: 'user@email.com',
            game:
            [
                {
                    winnder: true,
                    createdAt: '12/25/2016',
                    id: '00001'
                },
                {
                    winnder: true,
                    createdAt: '01/01/2017',
                    id: '0002'
                },
                {
                    winnder: false,
                    createdAt: '01/11/2017',
                    id: '0003'
                }
            ]
        }
    }

    render()
    {
        let {email} = this.props.user
        return (
            <Container>
                <Name>{email}</Name>
                <GameList>
                    <GameListHeader>
                        My Games
                    </GameListHeader>
                    <ColumnLabels>
                        <Column>
                            Outcome
                        </Column>
                        <Column>
                            Guess
                        </Column>
                        <Column>
                            Guessed Correctly
                        </Column>
                        <Column>
                            Date
                        </Column>
                    </ColumnLabels>
                </GameList>
            </Container>
        )
    }
}

export default Profile