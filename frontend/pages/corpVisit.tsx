import TopHeader from '../modules/common/Header'
import TemplateFooter from '../modules/common/Footer'
import ProjectBanner from '../modules/common/Project/ProjectBanner';
import TopTitle from "../modules/common/Title";

const CorpVisit = () => {
    const bannerList = [
        '企業參訪',
        'Google',
        'ogilvy'
    ];
    return (
        <>
            <TopHeader />
                <ProjectBanner bannerList={bannerList}/>
                <TopTitle title="企業參訪" marginBottom="5%" />
            <TemplateFooter />
        </>
    )
}
export default CorpVisit;
