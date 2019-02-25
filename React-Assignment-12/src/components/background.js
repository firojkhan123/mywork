import React from 'react';
import './background.css';
import AutoComplete from 'material-ui/AutoComplete';
import { Button, Card, CardText, Cell ,Grid} from 'react-mdl';

const background=(props)=>(
    <div>
        <div className="container">
        <Grid>
          <Cell col={10}>
          <div>
          <label className="Destination">Destination</label>
       
        </div>
            {/* <input type='text' className="input" type="text" placeholder="Enter City, LandMark or Location"></input> */}
          </Cell>
          
          <Cell col={2}>
            <button className="button">Search</button>
          </Cell>
          </Grid>
          <Grid>
            <Cell col={3}>
            <input class="w3-input w3-border" type="date" placeholder="Thu 1 Mar,2019"></input>
            </Cell>
            <Cell col={3}>
            <input class="w3-input w3-border" type="date" placeholder="Sat 3 Mar,2019">
            </input>
            </Cell>
            <Cell col={1}>
            <label className="Destination">02 Nights</label>
            </Cell>
            <Cell col={3}>
            <input class="w3-input w3-border" type="text" placeholder="1 room, 2 guest"></input>
            </Cell>
          </Grid>
        </div>
    </div>
    );

    export default background;