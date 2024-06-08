import Image from "next/image";

export const Campaigns = () => {
  return (
    <div className="campaign">
      <div className="campaign-heading">
        <h3>Campaigns</h3>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </div>
      <div className="campaign-cards">
        <div className="campaign-card">
          <Image
            src="/images/campaigns/group.png"
            alt="group of people at a staion"
            width={352}
            height={352}
          ></Image>
          <header>Open Data directive</header>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people.
          </p>
          <footer>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
        <div className="campaign-card">
          <Image
            src="/images/campaigns/beneficial.png"
            alt="group of people at a staion"
            width={352}
            height={352}
          ></Image>
          <header>Beneficial Ownership</header>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people.
          </p>
          <footer>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
        <div className="campaign-card">
          <Image
            src="/images/campaigns/dollar.png"
            alt="group of people at a staion"
            width={352}
            height={352}
          ></Image>

          <header>EU Recovery Transparency</header>
          <p>
            In view of Russia’s military action against the Ukrainian people,
            being concerned about ensuring that European funds In view of
            Russia’s military action against the Ukrainian people.
          </p>
          <footer>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={12}
              height={12}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </footer>
        </div>
      </div>
    </div>
  );
};
