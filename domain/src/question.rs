use async_trait::async_trait;

pub struct Question {
    pub id: Option<String>,
    pub text: String,
}

#[async_trait]
pub trait QuestionRepository: Clone + Send + Sync + 'static {
    async fn create(&self, question: &Question) -> Question;
    async fn update(&self, question: &Question) -> Question;
    async fn delete(&self, id: &str) -> bool;
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
