import style from  "./mainTitle.module.scss";

type MainTitleProps = {
    content: string;
};

export const MainTitle = ({ content }: MainTitleProps) => {
    return (
        <h1 className={style.title}>{ content }</h1>
    );
};