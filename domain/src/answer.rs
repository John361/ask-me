use async_trait::async_trait;

pub struct Answer {
    pub id: Option<String>,
    pub text: String,
}

#[async_trait]
pub trait AnswerRepository: Clone + Send + Sync + 'static {
    async fn create(&self, answer: &Answer) -> Answer;
    async fn update(&self, answer: &Answer) -> Answer;
    async fn delete(&self, id: &str) -> bool;
}

pub struct AnswerService<R> where R: AnswerRepository {
    repository: R,
}

impl<R> AnswerService<R> where R: AnswerRepository {
    pub async fn create(&self, answer: &Answer) -> Answer {
        self.repository.create(&answer).await
    }

    pub async fn update(&self, answer: &Answer) -> Answer {
        self.repository.update(&answer).await
    }

    pub async fn delete(&self, id: &str) -> bool {
        self.repository.delete(id).await
    }
}
