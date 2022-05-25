
import {React,useState,useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import Newscards from './components/Newscards/Newscards';
import './app.css';
import Newscard from './components/Newscard/Newscard';
import wordsToNumbers from 'words-to-numbers';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';





const alankey="f1d1fcaaf01e630c6eab4434bd27d7ab2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
    
    const [newsArticles,setnewsArticles] = useState([]);
    const [activeArticle, setactiveArticle] = useState(-1);
    const [category,setcategory]=useState("");

    useEffect(() => {
        alanBtn({
            key:alankey,
            onCommand: ({command, articles,number}) => {
                if(command ==='newheadlines'){
                    setcategory("");
                    setnewsArticles("");
                    
                setnewsArticles(articles);
                console.log(articles);
                setactiveArticle(-1);
                }
                else if(command==='highlight')
                {
                    setactiveArticle((prevactiveArticle)=>prevactiveArticle+1);
                     
                }
                else if(command==='open') {
                    const parsedNumber = number.length >2 ? wordsToNumbers(number,{fuzzy:true }) :number;
                    const article = articles[parsedNumber-1];
                    if(parsedNumber>20)
                    alanBtn().playText('Please try a different number');
                    else if(article)
                    window.open(article.url,'_blank'); 
                }
                
            }
        })

    },[]);

const API_KEY='30c407c8590c45948d17f41a44a7a5ad';
  const fetchNews =(category) => {
      setcategory(category);

    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    if(category)
    {
        NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
    }

    let req = new Request(NEWS_API_URL);

     fetch(req)
     .then(response => response.json())
            .then(response => {
              console.log(response.articles);
               setnewsArticles(response.articles);
                })
                .catch((error) => console.log(error.message));

               

                
  }

const search = (searchItem) => {
    let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    if(searchItem)
    {
        NEWS_API_URL = `https://newsapi.org/v2/top-headlines?q=${searchItem.toLowerCase()}&apiKey=${API_KEY}`;
    }

    console.log(searchItem);

    let req = new Request(NEWS_API_URL);

    fetch(req)
    .then(response => response.json())
           .then(response => {
             console.log(response.articles);
              setnewsArticles(response.articles);
              
            })
            .catch(error => {
                console.log(error.message);
               });
          
               setcategory("");

}
    return (
        
        <div className="app flex flex-col h-screen justify-between">
            <div>
            <Navbar fetchnews={fetchNews}/>
           <Header search={search}/>
            </div>
           <Newscards articles={newsArticles} activeArticle={activeArticle} category={category}/> 
           <Footer/>    
        </div>
    )
}

export default App;


