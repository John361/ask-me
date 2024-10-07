use tonic::{Request, Response, Status};

use domain::question::{Question, QuestionRepository};

use crate::question_impl::question_service_server::QuestionService;

tonic::include_proto!("question");

#[derive(Debug, Default)]
pub struct QuestionServiceImpl<R> where R: QuestionRepository {
    repository: R
}

impl<R> QuestionServiceImpl<R> where R: QuestionRepository {
    pub fn new(repository: R) -> Self {
        Self { repository }
    }
}

#[tonic::async_trait]
impl<R> QuestionService for QuestionServiceImpl<R> where R: QuestionRepository {
    async fn create(&self, request: Request<QuestionCreateRequest>) -> Result<Response<QuestionCreateResponse>, Status> {
        let request = request.into_inner();
        let request = Question {
            id: None,
            text: request.text.clone(),
        };

        let response = self.repository.create(&request).await;
        let response = QuestionCreateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn update(&self, request: Request<QuestionUpdateRequest>) -> Result<Response<QuestionUpdateResponse>, Status> {
        let request = request.into_inner();
        let request = Question {
            id: Some(request.id),
            text: request.text.clone(),
        };

        let response = self.repository.update(&request).await;
        let response = QuestionUpdateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, request: Request<QuestionDeleteRequest>) -> Result<Response<QuestionDeleteResponse>, Status> {
        let request = request.into_inner();
        let response = self.repository.delete(&request.id).await;
        let response = QuestionDeleteResponse {
            result: response
        };

        Ok(Response::new(response))
    }
}
