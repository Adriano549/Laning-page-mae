import { useParams } from "react-router-dom";
import aparelhosData from "@aparelhosArray/aparelhos.json";
import AparelhoInfoView from "./AparelhoInfoView";

const AparelhoInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const aparelho = aparelhosData.find(aparelho => aparelho.id.toString() === id);

    if (!aparelho) {
        return <div>Aparelho não encontrado</div>
    }

    return <AparelhoInfoView aparelho={aparelho} />;
}

export default AparelhoInfo;