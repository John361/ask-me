mod answer_impl;
mod question_impl;

use tonic::transport::Server;

use crate::answer_impl::{answer_service_server::AnswerServiceServer, AnswerServiceImpl};
use crate::question_impl::{question_service_server::QuestionServiceServer, QuestionServiceImpl};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let address = "[::1]:8080".parse().unwrap();
    let answer_service = AnswerServiceImpl::default();
    let question_service = QuestionServiceImpl::default();

    Server::builder()
        .add_service(AnswerServiceServer::new(answer_service))
        .add_service(QuestionServiceServer::new(question_service))
        .serve(address)
        .await?;

    Ok(())
}
