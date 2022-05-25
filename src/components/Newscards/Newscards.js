import react from "react";
import Newscard from '../Newscard/Newscard';
import {Grid, Grow, Typography, Skeleton} from '@mui/material';



const infoCards = [
  { index:'1', color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { index:'2', color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { index:'3', color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { index:'4', color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const Newscards = ({articles,activeArticle,category}) => {

  if(!articles.length)
  {
    return(
      <Grow in>
        <Grid container alignItems="center" spacing={1}>
       {infoCards.map((infocard)=>(
         <Grid container alignItems="center" justifyContent="center" item xs={12} sm={12} md={6} lg={3}>
           <div className={`cards card${infocard.index} drop-shadow-3xl hover:drop-shadow-4xl`}>
       
           </div>
         </Grid>
       ))}
        </Grid>
      </Grow>
    )
  }

  // to load local images in react we use require
   
    return(
      <div>
        <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center font-semibold text-3xl tracking-tight my-3">
        { category.length?(<img src={require(`./category/${category}.png`)} className="w-10 h-10 rounded-full mx-1" />):""}
        {category.length? (category.toUpperCase()+' News') :""} 
        
        </span>
        <Grow in>
            <Grid container alignItems="center" justifyContent="center" spacing={2} >
              {articles.map((article,i) => (
                  <Grid container alignItems="center" justifyContent="center" key={i} item xs={12} sm={12} md={6} lg={4} style= {{display:'flex'}}>
                    {
                    article ? <Newscard article={article} activeArticle={activeArticle} i={i}/>
                    :
                    <Skeleton variant="rectangular" width={750} height={550} />
                    }
                  </Grid> 
              ))}  
            </Grid> 
        </Grow>  
      </div>
    )
};


// const Newscards = ({articles}) => {
//   return (
//     <div>
    // {articles.map((article,i) => (
    //   <Newscard article={article} i={i}/>
    // ))}
//     </div>
//   )
// }

export default Newscards;