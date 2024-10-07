use async_trait::async_trait;

pub struct Answer {
    pub id: Option<String>,
    pub text: String,
}

#[async_trait]
pub trait AnswerRepositoryTrait: Clone + Send + Sync + 'static {
    async fn create(&self, answer: &Answer) -> Answer;
    async fn update(&self, answer: &Answer) -> Answer;
    async fn delete(&self, id: &str) -> bool;
}

#[async_trait]
pub trait AnswerServiceTrait: Clone + Send + Sync + 'static {
    async fn create(&self, answer: &Answer) -> Answer;
    async fn update(&self, answer: &Answer) -> Answer;
    async fn delete(&self, id: &str) -> bool;
}

#[derive(Clone)]
pub struct AnswerService<R> where R: AnswerRepositoryTrait {
    repository: R,
}

impl<R> AnswerService<R> where R: AnswerRepositoryTrait {
    pub fn new(repository: R) -> Self {
        Self { repository }
    }
}

#[async_trait]
impl<R> AnswerServiceTrait for AnswerService<R> where R: AnswerRepositoryTrait {
    async fn create(&self, answer: &Answer) -> Answer {
        self.repository.create(&answer).await
    }

    async fn update(&self, answer: &Answer) -> Answer {
        self.repository.update(&answer).await
    }

    async fn delete(&self, id: &str) -> bool {
        self.repository.delete(id).await
    }
}
