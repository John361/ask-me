mod answer_impl;
mod question_impl;

use tower_http::cors::{Any, CorsLayer};
use tonic::transport::Server;
use tonic_web::GrpcWebLayer;

use domain::answer::AnswerServiceTrait;
use domain::question::QuestionServiceTrait;

use crate::answer_impl::{answer_service_server::AnswerServiceServer, AnswerServiceImpl};
use crate::question_impl::{question_service_server::QuestionServiceServer, QuestionServiceImpl};

pub async fn start_server<AS: AnswerServiceTrait, QS: QuestionServiceTrait>(
    answer_repository: AS, question_repository: QS
) -> Result<(), Box<dyn std::error::Error>> {

    let address = "[::1]:8080".parse().unwrap();
    let answer_service = AnswerServiceImpl::new(answer_repository);
    let question_service = QuestionServiceImpl::new(question_repository);

    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_origin(Any)
        .allow_headers(Any);

    Server::builder()
        .accept_http1(true)
        .layer(cors)
        .layer(GrpcWebLayer::new())
        .add_service(AnswerServiceServer::new(answer_service))
        .add_service(QuestionServiceServer::new(question_service))
        .serve(address)
        .await?;

    Ok(())
}
