import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class landing extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Grid className="landing-grid">
                        <Cell col={12}></Cell>
                        <img 
                        src="https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png?fit=204%2C204"
                        alt="avatar"
                        className="avatar-img"
                        />
                    </Grid>
                </div>
            </div>
        )
    }
}
