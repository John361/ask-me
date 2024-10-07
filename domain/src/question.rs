use async_trait::async_trait;

pub struct Question {
    pub id: Option<String>,
    pub text: String,
}

#[async_trait]
pub trait QuestionRepositoryTrait: Clone + Send + Sync + 'static {
    async fn create(&self, question: &Question) -> Question;
    async fn update(&self, question: &Question) -> Question;
    async fn delete(&self, id: &str) -> bool;
}

#[async_trait]
pub trait QuestionServiceTrait: Clone + Send + Sync + 'static {
    async fn create(&self, question: &Question) -> Question;
    async fn update(&self, question: &Question) -> Question;
    async fn delete(&self, id: &str) -> bool;
}

#[derive(Clone)]
pub struct QuestionService<R> where R: QuestionRepositoryTrait {
    repository: R,
}

impl<R> QuestionService<R> where R: QuestionRepositoryTrait {
    pub fn new(repository: R) -> Self {
        Self { repository }
    }
}

#[async_trait]
impl<R> QuestionServiceTrait for QuestionService<R> where R: QuestionRepositoryTrait {
    async fn create(&self, question: &Question) -> Question {
        self.repository.create(&question).await
    }

    async fn update(&self, question: &Question) -> Question {
        self.repository.update(&question).await
    }

    async fn delete(&self, id: &str) -> bool {
        self.repository.delete(id).await
    }
}
