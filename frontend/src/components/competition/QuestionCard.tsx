// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
// import { ChangeEvent } from 'react';
// import { useAnswerContext } from '../../hooks/useAnswerContext';

// interface Option {
//   text: string;
//   isCorrect: boolean;
// }

// interface CardProps {
//   id: string;
//   title: string;
//   options: Option[];
//   index: number;
//   isAdmin: boolean;
// }

// export default function QuestionCard({ title, options, index, isAdmin, id }: CardProps) {
//   const correctOption = options.find(option => option.isCorrect);
//   const { answers, setAnswer } = useAnswerContext();
  
//   // Get the selected answer from context
//   const selectedAnswer = answers[id];

//   const handleOptionChange = (event: ChangeEvent<HTMLInputElement>, newValue: string) => {
//     if (!isAdmin) {
//       const option = options.find(opt => opt.text === newValue);
      
//       if (option) {
//         setAnswer(id, option);
//       }
//     }
//   };

//   return (
//     <Box sx={{ width: 500, marginBottom: 3 }}>
//       <Card variant="outlined">
//         <CardContent>
//           <Typography variant="h5" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
//             Question {index}
//           </Typography>
//           <Typography variant="h5" component="div" sx={{ marginBottom: 2, whiteSpace: 'normal', overflow: 'visible' }}>
//             {title}
//           </Typography>
//           <FormControl component="fieldset">
//             <RadioGroup
//               aria-labelledby={`question-options-group-${index}`}
//               name={`question-options-group-${index}`}
//               value={isAdmin ? correctOption?.text : selectedAnswer?.text || ''}
//               onChange={handleOptionChange}
//             >
//               {options.map((option, idx) => (
//                 <FormControlLabel
//                   key={idx}
//                   value={option.text}
//                   control={
//                     <Radio
//                       disabled={isAdmin}
//                       sx={{
//                         '& .MuiSvgIcon-root': {
//                           color: isAdmin && option.isCorrect ? 'green' : 'inherit',
//                         },
//                         '&.Mui-checked .MuiSvgIcon-root': {
//                           color: isAdmin && option.isCorrect ? 'green' : 'inherit',
//                         },
//                       }}
//                     />
//                   }
//                   label={
//                     <Typography
//                       sx={{
//                         color: isAdmin && option.isCorrect ? 'green' : 'inherit',
//                         fontWeight: isAdmin && option.isCorrect ? 'bold' : 'normal',
//                       }}
//                     >
//                       {option.text}
//                     </Typography>
//                   }
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent } from 'react';
import { useAnswerContext } from '../../hooks/useAnswerContext';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface CardProps {
  id: string;
  title: string;
  options: Option[];
  index: number;
  isAdmin: boolean;
}

export default function QuestionCard({ title, options, index, isAdmin, id }: CardProps) {
  const correctOption = options.find(option => option.isCorrect);
  const { answers, setAnswer } = useAnswerContext();
  
  // Get the selected answer from context
  const selectedAnswer = answers[id];

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>, newValue: string) => {
    if (!isAdmin) {
      const option = options.find(opt => opt.text === newValue);
      
      if (option) {
        setAnswer(id, option);
      }
    }
  };

  return (
    <Box sx={{ width: 700, marginBottom: 3 }}> {/* Increased width here */}
      <Card variant="outlined" sx={{ padding: 3 }}> {/* Optionally increase padding */}
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
            Question {index}
          </Typography>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2, whiteSpace: 'normal', overflow: 'visible' }}>
            {title}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby={`question-options-group-${index}`}
              name={`question-options-group-${index}`}
              value={isAdmin ? correctOption?.text : selectedAnswer?.text || ''}
              onChange={handleOptionChange}
            >
              {options.map((option, idx) => (
                <FormControlLabel
                  key={idx}
                  value={option.text}
                  control={
                    <Radio
                      disabled={isAdmin}
                      sx={{
                        '& .MuiSvgIcon-root': {
                          color: isAdmin && option.isCorrect ? 'green' : 'inherit',
                        },
                        '&.Mui-checked .MuiSvgIcon-root': {
                          color: isAdmin && option.isCorrect ? 'green' : 'inherit',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        color: isAdmin && option.isCorrect ? 'green' : 'inherit',
                        fontWeight: isAdmin && option.isCorrect ? 'bold' : 'normal',
                      }}
                    >
                      {option.text}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
