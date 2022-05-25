// import React from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';


// const Newscard = ({ article : {description, publishedAt, source, title,url,urlToImage},i}) => {

//     return 
//     (
//         <Card>
//             <CardActionArea>
//                 <CardMedia image= {urlToImage || 'https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg'}/>
//                 <div>
//                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
//                     <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>  
//                 </div>
//                 <Typography gutterBottom="h5">{title}</Typography>
//                 <CardContent>
//                     <Typography variant ="body2" color="textSecondary" component="p">{description}</Typography>
//                 </CardContent>  
//             </CardActionArea>
//             <CardActions>
//                 <Button size="small" color="primary">Learn More</Button>
//                 <Typography variant="h5" color="textSecondary">{i+1}</Typography>
//             </CardActions>
//        </Card>
       
         
//     )
// }

// import React from "react";
// import {Button} from "@mui/material";

// const Newscard = ({article,i}) => {
//     return (
//         <div>
//             <h1>{i}</h1>
//             <h2>{article.source.name}</h2>
//             <p>{article.description}</p>
//             <Button varient = "contained">Hello</Button>
              
//         </div>
//     )
// }

// export default Newscard;

import React, { useState, useEffect, createRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './newscard.css';



const Newscard= ({article,i,activeArticle}) => {
  const val='activeCard';

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
 
  return (
   

    <Card ref={elRefs[i]} className={`card ${activeArticle==i && val}`} sx={{ width: 1000, maxheight:550 ,boxShadow: 8, padding:1.5, margin:1, backgroundColor:'#e9ebe8'}}>
      <CardActionArea href={article.url} target="_blank">
        <CardMedia
          component="img"
          height="250"
          image= {article.urlToImage || 'https://thumbs.dreamstime.com/b/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg'}/>
         <div className="date">
         <Typography variant="body1" color="textSecondary" component="h2">{(new Date(article.publishedAt)).toDateString()}</Typography>
         <Typography variant="body1" color="textSecondary" component="h2">{article.source.name}</Typography>  
         </div>
        <CardContent>
          <Typography gutterBottom variant="body1" sx={{ fontStyle: 'italic', fontSize: 'h6.fontSize' }} component="div">
            {article.title}
          </Typography>
          <Typography variant="body3">
           {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bottom">
              <Button size="medium" variant="outlined" >Learn More</Button>
                 <Typography variant="p" color="primary">{i+1}</Typography>
             </CardActions>
    </Card>
    
  );
}

export default Newscard;


