import { useState, useMemo, useEffect } from 'react';
import aparelhosData from "@aparelhosArray/aparelhos.json";
import ProdutosPageView from "./ProdutosPageView";

const ProdutosPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const MaxProdutosPage = 8;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);
    
    const filteredAparelhos = useMemo(() => {
        return aparelhosData.filter(aparelho =>
            aparelho.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredAparelhos.length / MaxProdutosPage);

    const currentAparelhos = useMemo(() => {
        const startIndex = (currentPage - 1) * MaxProdutosPage;
        const endIndex = startIndex + MaxProdutosPage;
        return filteredAparelhos.slice(startIndex, endIndex);
    }, [currentPage, filteredAparelhos]);

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <ProdutosPageView
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            currentAparelhos={currentAparelhos}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
        />
    );
};

export default ProdutosPage;