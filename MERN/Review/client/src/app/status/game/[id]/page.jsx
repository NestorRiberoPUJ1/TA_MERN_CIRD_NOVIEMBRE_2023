'use client'
import { useParams } from "next/navigation";


const ViewGameStatusPage = () => {
    const { id } = useParams();


    return (
        <main>
            <h1>Game Status</h1>
        </main>
    )
};

export default ViewGameStatusPage;