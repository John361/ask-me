use domain::answer::{Answer, AnswerRepository};

struct AnswerRepositoryDbLog;

impl AnswerRepository for AnswerRepositoryDbLog {
    fn create(&self, answer: &Answer) -> Answer {
        println!("Creating new answer");
        Answer {
            id: answer.id.clone(),
            text: answer.text.clone(),
        }
    }

    fn update(&self, answer: &Answer) -> Answer {
        println!("Updating answer");
        Answer {
            id: answer.id.clone(),
            text: answer.text.clone(),
        }
    }

    fn delete(&self, id: &str) -> bool {
        println!("Deleting answer with id: {}", id);
        true
    }
}
