import React from "react";

type Props = {
    subTitle: string,
    title: string,
    cssSubTitle?: string,
    cssTitle?: string,
}

function PageTitle({subTitle, title, cssSubTitle, cssTitle}: Props) {
  return (
    <>
      <span className={`flex mt-4 tracking-[3px] text-[12px] md:text-[15px] uppercase  ${cssSubTitle}`}>{subTitle}</span>
      <p className={`tracking-widest text-[30px] font-thin font-serif md:text-[40px] xl:text-[46px] ${cssTitle}`}>
        {title}
      </p>
    </>
  );
}

export default PageTitle;
