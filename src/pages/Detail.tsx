import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    axios
      .get(
        `https://bankingkhabar.com/wp-json/wp/v2/posts/${id}?_embed`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center py-5">Loading post...</p>;
  }

  if (!data) {
    return <p className="text-center py-5">Post not found</p>;
  }

  const featuredImage =
    data._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">{data.title.rendered}</h2>

        {featuredImage && (
          <img
            src={featuredImage}
            className="w-100 mb-4"
            alt={data.title.rendered}
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        />
      </div>
    </section>
  );
}

export default Detail;
