use tonic::{Request, Response, Status};

use crate::answer_impl::answer_service_server::AnswerService;

tonic::include_proto!("answer");

#[derive(Debug, Default)]
pub struct AnswerServiceImpl {}

#[tonic::async_trait]
impl AnswerService for AnswerServiceImpl {
    async fn create(&self, request: Request<AnswerCreateRequest>) -> Result<Response<AnswerCreateResponse>, Status> {
        let request = request.into_inner();
        let response = AnswerCreateResponse {
            id: "1".to_string(),
            text: request.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn update(&self, request: Request<AnswerUpdateRequest>) -> Result<Response<AnswerUpdateResponse>, Status> {
        let request = request.into_inner();
        let response = AnswerUpdateResponse {
            id: request.id.clone(),
            text: request.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, _: Request<AnswerDeleteResponse>) -> Result<Response<AnswerDeleteResponse>, Status> {
        let response = AnswerDeleteResponse {
            result: true
        };

        Ok(Response::new(response))
    }
}
