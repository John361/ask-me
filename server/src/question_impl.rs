use tonic::{Request, Response, Status};

use crate::question_impl::question_service_server::QuestionService;

tonic::include_proto!("question");

#[derive(Debug, Default)]
pub struct QuestionServiceImpl {}

#[tonic::async_trait]
impl QuestionService for QuestionServiceImpl {
    async fn create(&self, request: Request<QuestionCreateRequest>) -> Result<Response<QuestionCreateResponse>, Status> {
        let request = request.into_inner();
        let response = QuestionCreateResponse {
            id: "1".to_string(),
            text: request.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn update(&self, request: Request<QuestionUpdateRequest>) -> Result<Response<QuestionUpdateResponse>, Status> {
        let request = request.into_inner();
        let response = QuestionUpdateResponse {
            id: request.id.clone(),
            text: request.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, _: Request<QuestionDeleteResponse>) -> Result<Response<QuestionDeleteResponse>, Status> {
        let response = QuestionDeleteResponse {
            result: true
        };

        Ok(Response::new(response))
    }
}
