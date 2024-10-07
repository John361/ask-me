use tonic::{Request, Response, Status};

use domain::answer::{Answer, AnswerRepository};

use crate::answer_impl::answer_service_server::AnswerService;

tonic::include_proto!("answer");

#[derive(Debug, Default)]
pub struct AnswerServiceImpl<R> where R: AnswerRepository {
    repository: R
}

impl<R> AnswerServiceImpl<R> where R: AnswerRepository {
    pub fn new(repository: R) -> Self {
        Self { repository }
    }
}

#[tonic::async_trait]
impl<R> AnswerService for AnswerServiceImpl<R> where R: AnswerRepository {
    async fn create(&self, request: Request<AnswerCreateRequest>) -> Result<Response<AnswerCreateResponse>, Status> {
        let request = request.into_inner();
        let request = Answer {
            id: None,
            text: request.text.clone(),
        };

        let response = self.repository.create(&request).await;
        let response = AnswerCreateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn update(&self, request: Request<AnswerUpdateRequest>) -> Result<Response<AnswerUpdateResponse>, Status> {
        let request = request.into_inner();
        let request = Answer {
            id: Some(request.id),
            text: request.text.clone(),
        };

        let response = self.repository.update(&request).await;
        let response = AnswerUpdateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, request: Request<AnswerDeleteRequest>) -> Result<Response<AnswerDeleteResponse>, Status> {
        let request = request.into_inner();
        let response = self.repository.delete(&request.id).await;
        let response = AnswerDeleteResponse {
            result: response
        };

        Ok(Response::new(response))
    }
}
