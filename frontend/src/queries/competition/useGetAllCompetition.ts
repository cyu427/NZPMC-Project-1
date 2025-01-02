import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllCompetition = () =>
    axios.get('http://localhost:8080/admin/competition').then(res => res.data);

export const useGetAllCompetitions = () => {
    return useQuery({
        queryKey: ["allCompetition"],
        queryFn: getAllCompetition,
    });
};
