use domain::question::{Question, QuestionRepository};

struct QuestionRepositoryDbLog;

impl QuestionRepository for QuestionRepositoryDbLog {
    fn create(&self, question: &Question) -> Question {
        println!("Creating new question");
        Question {
            id: question.id.clone(),
            text: question.text.clone(),
        }
    }

    fn update(&self, question: &Question) -> Question {
        println!("Updating question");
        Question {
            id: question.id.clone(),
            text: question.text.clone(),
        }
    }

    fn delete(&self, id: &str) -> bool {
        println!("Deleting question with id: {}", id);
        true
    }
}
