import { useContext } from 'react';
import { AnswerContext } from '../context/AnswerContext';

export const useAnswerContext = () => {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error('useAnswerContext must be used within an AnswerProvider');
  }
  return context;
};