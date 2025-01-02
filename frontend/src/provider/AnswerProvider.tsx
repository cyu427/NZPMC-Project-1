'use client';

import React, { useState } from 'react';
import { AnswerContext, Option } from '../context/AnswerContext';

export const AnswerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Record<string, Option>>({}); // Initial state where all questions have no answer

  const setAnswer = (questionId: string, option: Option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const clearAnswers = () => {
    setAnswers({}); // Resets all answers
  };


  return (
    <AnswerContext.Provider value={{ answers, setAnswer, clearAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
