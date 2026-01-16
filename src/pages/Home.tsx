// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import PostByCat from '../components/PostByCat'

// function Home() {
//       let [data, setData]=useState<any[]>([])
//     useEffect(()=>{
//         axios.get("https://bankingkhabar.com/wp-json/wp/v2/posts").then(res=>{setData(res.data)})
//     })
//   return (
//     <>
//     <section className='py5'>
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-12 text-center ">
//                     {data.map((a)=>(
//                     <div className="border p-3 my-4" key={a.id}>
//                         <img className='w-100' src={a.featured_image_src} alt="" />
//                         <h2 className='py-4'>{a.title.rendered}</h2></div>
//                     ))}
                   
//                 </div>
//             </div>
//         </div>
//     </section>
//     <PostByCat id='71' title='ABC'/>
//      <PostByCat id='81'  title='EFG'/>
//       <PostByCat id='62'  title='HIJ'/>
//     </>
//   )
// }

// export default Home



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostByCat from '../components/PostByCat';

interface Post {
  id: number;
  title: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
}

function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://bankingkhabar.com/wp-json/wp/v2/posts?_embed")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []); // empty dependency to run once

  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {data.map((a) => {
                const image = a._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                return (
                  <Link to={`/detail/${a.id}`} key={a.id} className="text-decoration-none">
                    <div className="border p-3 my-4">
                      {image && <img className='w-100' src={image} alt={a.title.rendered} />}
                      <h2 className='py-4'>{a.title.rendered}</h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <PostByCat id={71} title='ABC' />
      <PostByCat id={81} title='EFG' />
      <PostByCat id={62} title='HIJ' />
    </>
  );
}

export default Home;
