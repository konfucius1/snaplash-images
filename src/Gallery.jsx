import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });

  if (response.isLoading) {
    return <section></section>;
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No images found...</h4>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:px-36 py-16">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <div key={item.id} className="flex justify-center">
            <img
              src={url}
              alt={item.alt_description}
              className="w-full max-w-sm object-cover rounded-xl py-2"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
