import React from 'react';
import './Title.css';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
   Typography
  } from "@material-ui/core";
export default function TitlePage() {
  return (
    <div className='title-page'>
      <h1 className='title-head'>Here Are My React Projects</h1>

    <div className="link-cards">
  
      <Card style={{ width:'250px'}} className='title-page-cards'>
      <Link to="/meme-generator" style={{ textDecoration: 'none', color: '#F9D949'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Meme Generator (Props, States, Object, APIs, Hooks)
          </Typography>
        </CardContent>
      </Link>
    </Card>
    <Card style={{ width:'250px'}} className='title-page-cards'>
      <Link to="/airbnb-clone" style={{ textDecoration: 'none', color: '#F9D949'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            AirBnB Clone (Props, Objects)
          </Typography>
        </CardContent>
      </Link>
    </Card>
    <Card style={{ width:'250px'}} className='title-page-cards'>
      <Link to="/pets-props" style={{ textDecoration: 'none', color: '#F9D949'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Pets Contacts (Props)
          </Typography>
        </CardContent>
      </Link>
    </Card>
    <Card style={{ width:'250px'}} className='title-page-cards'>
      <Link to="/boxes" style={{ textDecoration: 'none', color: '#F9D949'}}>
        <CardContent>
          <Typography variant="h5" component="div">
            Boxes
          </Typography>
        </CardContent>
      </Link>
    </Card>
    
    </div>
    </div>
  );
}
