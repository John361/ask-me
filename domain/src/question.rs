pub struct Question {
    pub id: Option<String>,
    pub text: String,
}

pub trait QuestionRepository {
    fn create(&self, question: &Question) -> Question;
    fn update(&self, question: &Question) -> Question;
    fn delete(&self, id: &str) -> bool;
}

pub struct QuestionService {
    repository: Box<dyn QuestionRepository>,
}

impl QuestionService {
    pub fn create(&self, question: &Question) -> Question {
        self.repository.create(&question)
    }

    pub fn update(&self, question: &Question) -> Question {
        self.repository.update(&question)
    }

    pub fn delete(&self, id: &str) -> bool {
        self.repository.delete(id)
    }
}
