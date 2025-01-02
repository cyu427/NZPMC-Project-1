import { useMutation, } from "@tanstack/react-query";
import axios from "axios";
import { CreateCompetitionFormData } from "../../schema/formValidation/competitionSchema";
import { Option } from "../../context/AnswerContext";

interface SubmitAttemptParams {
    userId: string;
    competitionId: string;
    attempt: Record<string, Option>;
  }

const submitAttempt = ({userId, competitionId, attempt} : SubmitAttemptParams) =>
    axios.post(`http://localhost:8080/attempt/${userId}/${competitionId}`, attempt);

export const useSubmitAttempt = () => {
    // Return useMutation hook with createQuestion as the mutation function
    return useMutation({
        mutationFn: submitAttempt,
        // Optional: You can add `onSuccess` or `onError` to handle specific side effects
        onSuccess: () => {
            // For example, refetch a list of questions if needed
        },
        onError: (error) => {
            console.error("Error creating competition", error);
        },
    });
};
