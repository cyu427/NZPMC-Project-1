import { useMutation, } from "@tanstack/react-query";
import axios from "axios";
import { CreateCompetitionFormData } from "../../schema/formValidation/competitionSchema";

const createCompetition = (competition: CreateCompetitionFormData) =>
    axios.post('http://localhost:8080/admin/competition', competition);

export const useCreateCompetiton = () => {
    // Return useMutation hook with createQuestion as the mutation function
    return useMutation({
        mutationFn: createCompetition,
        // Optional: You can add `onSuccess` or `onError` to handle specific side effects
        onSuccess: () => {
            // For example, refetch a list of questions if needed
        },
        onError: (error) => {
            console.error("Error creating competition", error);
        },
    });
};
