import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Tabs, Tab } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard"; // Assuming this is your custom component
import { useGetCompetition } from "../../queries/competition/useGetCompetition";
import QuestionToCompetitionModal from "./QuestionToCompetitionModal";

const CompetitionDetailSection: React.FC = () => {
  const [isAddCompetitionModalOpen, setIsAddCompetitionModalOpen] = useState(false);
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabPanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("Id is: ", id);
  }, [id, location.pathname]);

  const { data, error, isLoading, refetch } = useGetCompetition(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClickOpen = () => {
    // Logic for deleting competition
  };

  const handleScrollToPanel = (index: number) => {
    const panel = tabPanelRefs.current[index];
    if (panel) {
      const tabHeight = 200; // Adjust this value if your tabs have a different height
      const offsetTop = panel.offsetTop - tabHeight; // Adjust the offset to take into account the tab height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveTab(index); // Update the active tab when clicked
    }
  };

  const handleCloseAddQuestion = () => {
    setIsAddQuestionModalOpen(false);
  }

  const handleOpenAddQuestion = () => {
    setIsAddQuestionModalOpen(true);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabPanelRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveTab(index); // Update the active tab when scrolling
            }
          }
        });
      },
      { threshold: 1 } // Adjust the threshold to your preference
    );

    tabPanelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        {data.title}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "1200px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddQuestion}
          sx={{ width: "100%" }}
        >
          Add Question
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "920px",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minWidth: "200px",
            position: "sticky",
            top: 0,
            maxHeight: "60vh",
            overflowY: "auto",
          }}
          value={activeTab} // Highlight the active tab
        >
          {data.question && data.question.length > 0 ? (
            data.question.map((question, index) => (
              <Tab
                key={question.id}
                label={`Question ${index + 1}`}
                onClick={() => handleScrollToPanel(index)}
              />
            ))
          ) : (
            <Tab label="No questions available" />
          )}
        </Tabs>

        <div
          style={{
            flex: 1,
            marginLeft: "20px",
          }}
        >
          {data.question && data.question.length > 0 ? (
            data.question.map((question, index) => (
              <div
                key={question.id}
                ref={(el) => (tabPanelRefs.current[index] = el)}
                style={{ marginBottom: "20px" }}
              >
                <QuestionCard
                  index={index + 1}
                  title={question.title}
                  options={question.options}
                  isAdmin={true}
                  id={""}
                />
              </div>
            ))
          ) : (
            <Typography>No questions available.</Typography>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "1200px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", width: "100%" }}
        >
          Delete Competition
        </Button>
      </div>

      {isAddQuestionModalOpen && <QuestionToCompetitionModal onClose={handleCloseAddQuestion} competitionId={id!} />}

    </div>
  );
};

export default CompetitionDetailSection;
