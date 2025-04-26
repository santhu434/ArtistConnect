import { useParams } from "react-router";
import ArtistInfo from "./artistInfo";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

type Props = {

}
export const OnboardComponent = ({ }: Props) => {
    const { id } = useParams()
    const accType = localStorage.getItem("accType")
    switch (id) {
        case "1":
            return <Step1 />
        case "2":
            if (accType == "artist")
                return <ArtistInfo />
            return <Step2 />
        case "3":
            return <Step3 />
        // case "4":
        //     return <Step4 />
        // case "5":
        //     return <Step5 />
        default:
            return <Step1 />
    }
}