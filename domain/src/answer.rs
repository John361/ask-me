use std::future::Future;

pub struct Answer {
    pub id: Option<String>,
    pub text: String,
}

pub trait AnswerRepository: Clone + Send + Sync + 'static {
    fn create(&self, answer: &Answer) -> impl Future<Output = Answer> + Send;
    fn update(&self, answer: &Answer) -> impl Future<Output = Answer> + Send;
    fn delete(&self, id: &str) -> impl Future<Output = bool> + Send;
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
