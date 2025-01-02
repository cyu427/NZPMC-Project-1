import { useMutation, } from "@tanstack/react-query";
import axios from "axios";
import { CreateCompetitionFormData } from "../../schema/formValidation/competitionSchema";

interface AddQuestionToCompetitionParams {
    competitionId: string;
    questionId: string;
  }

const addQuestionToCompetition = ({competitionId, questionId}: AddQuestionToCompetitionParams) =>
    axios.put(`http://localhost:8080/admin/competition/addQuestionToCompetition/${competitionId}/${questionId}`);

export const useAddQuestionToCompetition = () => {
    // Return useMutation hook with createQuestion as the mutation function
    return useMutation({
        mutationFn: addQuestionToCompetition,
        // Optional: You can add `onSuccess` or `onError` to handle specific side effects
        onSuccess: () => {
            // For example, refetch a list of questions if needed
        },
        onError: (error) => {
            console.error("Error creating competition", error);
        },
    });
};
