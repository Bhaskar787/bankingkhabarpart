// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// function Category() {
//     let {cid}=useParams()
//  let [data, setData]=useState<any[]>([])
//     useEffect(()=>{
//         axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}`).then(res=>{setData(res.data)})
//     },[cid])
//   return (
//     <>
//     <section className='py5'>
//         <div className="container">
//             <div className="row g-4">
               
//                     {data.map((a)=>(
//                          <div className="col-lg-3 text-center ">
//                     <div className="border p-3 my-4" key={a.id}>
//                         <img className='w-100' src={a.featured_image_src} alt="" />
//                         <p className='py-4'>{a.title.rendered}</p></div>
//                         </div>
//                     ))}
                   
//                 </div>
            
//         </div>
//     </section>
//     </>
//   )
// }

// export default Category




import axios from "axios";
import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Post {
  id: number;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

function Category() {
  const { cid } = useParams<{ cid: string }>();
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    if (!cid) return;

    axios
      .get(
        `https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}&_embed`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [cid]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {data.map((a) => {
            const image = a._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return (
              <div className="col-lg-3 text-center" key={a.id}>
                <Link to={`/detail/${a.id}`} className="text-decoration-none">
                  <div className="border p-3 my-4">
                    {image && <img src={image} className="w-100" alt={a.title.rendered} />}
                    <p className="py-4">{a.title.rendered}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Category;
