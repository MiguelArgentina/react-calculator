import useFetch from './useFetch';

const Quote = () => {
  let data;
  let isPending = true;
  let error;

  if (isPending) ({ data, isPending, error } = useFetch('https://favqs.com/api/qotd'));

  return (
    <div>
      { isPending && <p className="text-start home-para quote-para">Loading...</p> }
      { error && <p className="text-start home-para quote-para">An error has occured while loading the quote...</p> }
      { data && (
      <p className="text-start home-para quote-para">
        {data.quote.body}
      </p>
      ) }
      { data && (
      <p className="text-start home-para quote-para">
        {data.quote.author}
      </p>
      ) }
    </div>
  );
};

export default Quote;
// GET https://api.paperquotes.com/apiv1/quotes/?lang=en/?tags=math,mathematics&order=-likes

// GET https://api.paperquotes.com/apiv1/quotes/?tags=love,motivation&order=-likes

// 1c2e6bad6065b2d3704818fdbd848de65f87b165
