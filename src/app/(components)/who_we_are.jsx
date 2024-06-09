import Image from "next/image";
export const Whoweare = () => {
  return (
    <div className="whoweare">
      <div className="whoweare_text">
        <h3>Who we are</h3>
        <p>
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </p>
        <button>
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={12}
            height={12}
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              fill="#1D6FA3"
            />
          </svg>
        </button>
      </div>
      <div className="whoweare_images">
        <div className="whoweare_image1">
          <Image
            width={328}
            height={415}
            src="/images/whoweare/backcap.png"
            alt="BacKcap guy"
          ></Image>
          <h3>Adriana Homolova</h3>

          <Image
            width={328}
            height={415}
            src="/images/whoweare/women.png"
            alt="BacKcap guy"
          ></Image>
          <h3>Karolis Granikas</h3>
        </div>
        <div className="whoweare_image2">
          <Image
            width={328}
            height={415}
            src="/images/whoweare/frontcap.png"
            alt="BacKcap guy"
          ></Image>
          <h3>Sandor Lederer</h3>

          <Image
            width={328}
            height={415}
            src="/images/whoweare/girl.png"
            alt="BacKcap guy"
          ></Image>
          <h3>Zara Montgomery</h3>
        </div>
      </div>
    </div>
  );
};
