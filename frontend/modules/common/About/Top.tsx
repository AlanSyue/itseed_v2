import TopTitle from "../Title";
import TopBanner from "../About/TopBanner";

const TopBlock = (props) => {
    const { title } = props;
    return (
        <>
        <TopBanner />
        <TopTitle title={title} />
        </>
    )
}

export default TopBlock;
