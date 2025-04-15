import { useParams } from "react-router";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";



type Props = {

}
export const OnboardComponent = ({ }: Props) => {
    const { id } = useParams()

    switch (id) {
        case "1":
            return <Step1 />
        case "2":
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