import Image from "next/image";
export const Newss = async ({ count }) => {
  const response = await fetch(
    "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
  );
  const data = await response.json();
  console.log(data.news[1].image);
  return (
    <div className="news-cards">
      {data?.news.slice(0, count).map((datas) => (
        <div className="news-card">
          <span>
            <Image
              className="round-image"
              width={315}
              height={200}
              src={datas.image}
              alt={datas.title}
            ></Image>
          </span>
          <h4>{datas.title}</h4>
          <p>{datas.content}</p>
          <footer>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#1D6FA3' />
            </svg>
          </footer>
        </div>
      ))}
    </div>
  );
};
