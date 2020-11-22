import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'roboto',
  },
}));

const ButtonClick = styled.button
`
 color: white;
 height: 30px;
 width: 70px;
 border:none;
 border:solid 2px white;
 border-radius: 5px;
 &:hover {
  border:solid 2px black;
  cursor: pointer;
 }
 background: rgba(255, 255, 255,0);

 font-size: 18px;
 margin: 10px 20px;
`

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar style={{background: '#000080'}} >
        <Toolbar>
          <Typography className={classes.title}>
            Kelompok 17
          </Typography>
          <ButtonClick>
              Link
          </ButtonClick>
          <ButtonClick >
              Link
          </ButtonClick>
        </Toolbar>
      </AppBar>
    </div>
  );
}
