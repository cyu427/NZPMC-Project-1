import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import QuestionCard from './QuestionCard';
import { useState } from 'react';
import { useAnswerContext } from '../../hooks/useAnswerContext';
import { useGetCompetition } from '../../queries/competition/useGetCompetition';
import { useSubmitAttempt } from '../../queries/attempt/useSubmitAttempt';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Answer {
  questionId: string;
  selectedOption: Option;
}

interface CompetitionAttemptProps {
  userId: string;
  competitionId: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4, backgroundColor: 'white', color: 'black' }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CompetitionAttemptSection(props: CompetitionAttemptProps) {
  const [value, setValue] = useState(0);
  const { answers, clearAnswers } = useAnswerContext();

  const { data, error, isLoading, refetch } = useGetCompetition(props.competitionId!);
  const { mutate } = useSubmitAttempt();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNext = () => {
    if (value < data.question.length - 1) {
      setValue(value + 1);
    }
  };

  const handlePrevious = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted Answers:', answers);
    mutate({ userId: props.userId, competitionId: props.competitionId, attempt: answers });
    clearAnswers();
  };

  // const data = {
  //   id: 'competition123',
  //   title: 'Sample Competition Title',
  //   question: [
  //     {
  //       id: 'question1',
  //       title: 'What is the capital of France?',
  //       options: [
  //         { text: 'Paris', isCorrect: true },
  //         { text: 'Berlin', isCorrect: false },
  //         { text: 'Madrid', isCorrect: false },
  //         { text: 'asdsa', isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 'question2',
  //       title: 'Which planet is known as the Red Planet?',
  //       options: [
  //         { text: 'Earth', isCorrect: false },
  //         { text: 'Mars', isCorrect: true },
  //         { text: 'Venus', isCorrect: false },
  //         { text: 'asdsa', isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 'question3',
  //       title: 'Which planet is the largest in our solar system?',
  //       options: [
  //         { text: 'Jupiter', isCorrect: true },
  //         { text: 'Saturn', isCorrect: false },
  //         { text: 'Neptune', isCorrect: false },
  //         { text: 'asdsa', isCorrect: false },
  //       ],
  //     },
  //     // additional questions...
  //   ],
  // };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '1.2rem' }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 500,
          width: '1200px',
          padding: '20px',
          marginLeft: '60px',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            maxHeight: '100vh',
            overflowY: 'auto',
            fontSize: '1.5rem',
            minWidth: '200px',
          }}
        >
          {data.question.map((question, index) => (
            <Tab label={`Question ${index + 1}`} {...a11yProps(index)} key={question.id} sx={{ fontSize: '1.2rem' }} />
          ))}
        </Tabs>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>
          {data.question.map((question, index) => (
            <TabPanel value={value} index={index} key={question.id}>
              <QuestionCard
                id={data.question[index].id}
                index={index + 1}
                title={question.title}
                options={question.options}
                isAdmin={false}
              />
            </TabPanel>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 2, marginLeft: '600px' }}>
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={value === 0}
          sx={{ fontSize: '1.2rem', padding: '10px 20px' }}
        >
          Previous
        </Button>
        {value === data.question.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ fontSize: '1.2rem', marginLeft: 2, padding: '10px 20px' }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={value === data.question.length - 1}
            sx={{ fontSize: '1.2rem', marginLeft: 2, padding: '10px 20px' }}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}
