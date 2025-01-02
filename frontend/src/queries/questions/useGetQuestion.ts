import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getQuestion = (id: string) =>
    axios.get(`http://localhost:8080/admin/question/${id}`).then(res => res.data);

export const useGetQuestion = (id: string) => {
    return useQuery({
        queryKey: ["questions"],
        queryFn: () => getQuestion(id),
    });
};
