use std::future::Future;

pub struct Question {
    pub id: Option<String>,
    pub text: String,
}

pub trait QuestionRepository: Clone + Send + Sync + 'static {
    fn create(&self, question: &Question) -> impl Future<Output = Question> + Send;
    fn update(&self, question: &Question) -> impl Future<Output = Question> + Send;
    fn delete(&self, id: &str) -> impl Future<Output = bool> + Send;
}

pub struct QuestionService<R> where R: QuestionRepository {
    repository: R,
}

impl<R> QuestionService<R> where R: QuestionRepository {
    pub async fn create(&self, question: &Question) -> Question {
        self.repository.create(&question).await
    }

    pub async fn update(&self, question: &Question) -> Question {
        self.repository.update(&question).await
    }

    pub async fn delete(&self, id: &str) -> bool {
        self.repository.delete(id).await
    }
}
