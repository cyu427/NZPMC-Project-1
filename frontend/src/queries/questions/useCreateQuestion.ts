import { useMutation, } from "@tanstack/react-query";
import axios from "axios";
import { CreateQuestionFormData } from "../../schema/formValidation/questionSchema";
import { QuestionPayload } from "../../utils/CreateQuestionMapper";

const createQuestion = (question: QuestionPayload) =>
    axios.post('http://localhost:8080/admin/question', question);

export const useCreateQuestion = () => {
    // Return useMutation hook with createQuestion as the mutation function
    return useMutation({
        mutationFn: createQuestion,
        // Optional: You can add `onSuccess` or `onError` to handle specific side effects
        onSuccess: () => {
            // For example, refetch a list of questions if needed
        },
        onError: (error) => {
            console.error("Error creating question", error);
        },
    });
};
