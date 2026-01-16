// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function PostByCat({id,title}: {id:number, title:string}) {
    
//  let [data, setData]=useState<any[]>([])
//     useEffect(()=>{
//         axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${id}`).then(res=>{setData(res.data)})
//     },[id])
//   return (
//     <>
//     <section className='py5'>
//         <div className="container">
//             <h4 className='font-bold'>{title}</h4>
//             <div className="row g-4">
               
//                     {data.slice(0,4).map((a)=>(
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

// export default PostByCat



import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  featured_image_src?: string;
  title: {
    rendered: string;
  };
}

function PostByCat({ id, title }: { id: number; title: string }) {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${id}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <section className="py-5">
      <div className="container">
        <h4 className="font-bold mb-3">{title}</h4>

        <div className="row g-4">
          {data.map((a) => (
            <div className="col-lg-3 text-center" key={a.id}>
              <Link to={`/detail/${a.id}`} className="text-decoration-none">
  <div className="border p-3 h-100">
    <img
      className="w-100"
      src={a.featured_image_src || "/placeholder.jpg"}
      alt={a.title.rendered}
    />
    <p className="py-4">{a.title.rendered}</p>
  </div>
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostByCat;
