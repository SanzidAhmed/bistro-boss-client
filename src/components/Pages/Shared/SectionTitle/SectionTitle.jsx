
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto my-8">
            <p className="text-yellow-500 text-center mb-2">---{subHeading}---</p>
            <h3 className="text-center text-4xl font-semibold border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;