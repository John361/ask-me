use tonic::{Request, Response, Status};

use domain::question::{Question, QuestionServiceTrait};

use crate::question_impl::question_service_server::QuestionService;

tonic::include_proto!("question");

#[derive(Debug, Default)]
pub struct QuestionServiceImpl<S> where S: QuestionServiceTrait {
    service: S
}

impl<S> QuestionServiceImpl<S> where S: QuestionServiceTrait {
    pub fn new(service: S) -> Self {
        Self { service }
    }
}

#[tonic::async_trait]
impl<S> QuestionService for QuestionServiceImpl<S> where S: QuestionServiceTrait {
    async fn create(&self, request: Request<QuestionCreateRequest>) -> Result<Response<QuestionCreateResponse>, Status> {
        let request = request.into_inner();
        let request = Question {
            id: None,
            text: request.text.clone(),
        };

        let response = self.service.create(&request).await;
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

        let response = self.service.update(&request).await;
        let response = QuestionUpdateResponse {
            id: response.id.unwrap_or("".to_string()),
            text: response.text.clone(),
        };

        Ok(Response::new(response))
    }

    async fn delete(&self, request: Request<QuestionDeleteRequest>) -> Result<Response<QuestionDeleteResponse>, Status> {
        let request = request.into_inner();
        let response = self.service.delete(&request.id).await;
        let response = QuestionDeleteResponse {
            result: response
        };

        Ok(Response::new(response))
    }
}
