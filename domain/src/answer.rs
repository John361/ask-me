pub struct Answer {
    pub id: Option<String>,
    pub text: String,
}

pub trait AnswerRepository {
    fn create(&self, question: &Answer) -> Answer;
    fn update(&self, question: &Answer) -> Answer;
    fn delete(&self, id: &str) -> bool;
}

pub struct AnswerService {
    repository: Box<dyn AnswerRepository>,
}

impl AnswerService {
    pub fn create(&self, question: &Answer) -> Answer {
        self.repository.create(&question)
    }

    pub fn update(&self, question: &Answer) -> Answer {
        self.repository.update(&question)
    }

    pub fn delete(&self, id: &str) -> bool {
        self.repository.delete(id)
    }
}
