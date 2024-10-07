use async_trait::async_trait;

use domain::answer::{Answer, AnswerRepositoryTrait};

#[derive(Clone, Default)]
pub struct AnswerRepositoryDbLog;

#[async_trait]
impl AnswerRepositoryTrait for AnswerRepositoryDbLog {
    async fn create(&self, answer: &Answer) -> Answer {
        println!("Creating new answer");
        Answer {
            id: answer.id.clone(),
            text: answer.text.clone(),
        }
    }

    async fn update(&self, answer: &Answer) -> Answer {
        println!("Updating answer");
        Answer {
            id: answer.id.clone(),
            text: answer.text.clone(),
        }
    }

    async fn delete(&self, id: &str) -> bool {
        println!("Deleting answer with id: {}", id);
        true
    }
}
