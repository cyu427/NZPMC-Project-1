import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllQuestions = () =>
    axios.get('http://localhost:8080/admin/question').then(res => res.data);

export const useGetAllQuestions = () => {
    return useQuery({
        queryKey: ["allQuestions"],
        queryFn: getAllQuestions,
    });
};
