use tonic::{Request, Response, Status};

use domain::answer::{Answer, AnswerServiceTrait};

use crate::answer_impl::answer_service_server::AnswerService;

tonic::include_proto!("answer");

#[derive(Debug, Default)]
pub struct AnswerServiceImpl<S> where S: AnswerServiceTrait {
    service: S
}

impl<S> AnswerServiceImpl<S> where S: AnswerServiceTrait {
    pub fn new(service: S) -> Self {
        Self { service }
    }
}

#[tonic::async_trait]
impl<S> AnswerService for AnswerServiceImpl<S> where S: AnswerServiceTrait {
    async fn create(&self, request: Request<AnswerCreateRequest>) -> Result<Response<AnswerCreateResponse>, Status> {
        let request = request.into_inner();
        let request = Answer {
            id: None,
            text: request.text.clone(),
        };

        let response = self.service.create(&request).await;
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

        let response = self.service.update(&request).await;
        let response = AnswerUpdateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, request: Request<AnswerDeleteRequest>) -> Result<Response<AnswerDeleteResponse>, Status> {
        let request = request.into_inner();
        let response = self.service.delete(&request.id).await;
        let response = AnswerDeleteResponse {
            result: response
        };

        Ok(Response::new(response))
    }
}
