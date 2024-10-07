use async_trait::async_trait;

use domain::question::{Question, QuestionRepositoryTrait};

#[derive(Clone, Default)]
pub struct QuestionRepositoryDbLog;

#[async_trait]
impl QuestionRepositoryTrait for QuestionRepositoryDbLog {
    async fn create(&self, question: &Question) -> Question {
        println!("Creating new question");
        Question {
            id: question.id.clone(),
            text: question.text.clone(),
        }
    }

    async fn update(&self, question: &Question) -> Question {
        println!("Updating question");
        Question {
            id: question.id.clone(),
            text: question.text.clone(),
        }
    }

    async fn delete(&self, id: &str) -> bool {
        println!("Deleting question with id: {}", id);
        true
    }
}
