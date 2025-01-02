import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCompetition = (id: string) =>
    axios.get(`http://localhost:8080/competition/${id}`).then(res => res.data);

export const useGetCompetition = (id: string) => {
    return useQuery({
        queryKey: ["questions"],
        queryFn: () => getCompetition(id),
    });
};
