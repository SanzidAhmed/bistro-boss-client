

const Cover = ({img, title, subtitle}) => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 uppercase">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;