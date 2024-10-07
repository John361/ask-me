pub struct Answer {
    pub id: Option<String>,
    pub text: String,
}

pub trait AnswerRepository {
    fn create(&self, answer: &Answer) -> Answer;
    fn update(&self, answer: &Answer) -> Answer;
    fn delete(&self, id: &str) -> bool;
}

pub struct AnswerService {
    repository: Box<dyn AnswerRepository>,
}

impl AnswerService {
    pub fn create(&self, answer: &Answer) -> Answer {
        self.repository.create(&answer)
    }

    pub fn update(&self, answer: &Answer) -> Answer {
        self.repository.update(&answer)
    }

    pub fn delete(&self, id: &str) -> bool {
        self.repository.delete(id)
    }
}
