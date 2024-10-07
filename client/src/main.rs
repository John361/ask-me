use std::io::stdin;

use crate::answer_impl::answer_service_client::AnswerServiceClient;
use crate::answer_impl::AnswerCreateRequest;
use crate::question_impl::question_service_client::QuestionServiceClient;
use crate::question_impl::QuestionCreateRequest;

mod answer_impl;
mod question_impl;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut question_client = QuestionServiceClient::connect("http://[::1]:8080").await?;
    let mut answer_client = AnswerServiceClient::connect("http://[::1]:8080").await?;

    loop {
        // Ask for user inputs
        println!("\nProvide a new question");
        let mut user_question = String::new();
        stdin().read_line(&mut user_question).unwrap();
        let user_question = user_question.trim();

        println!("\nProvide a new answer");
        let mut user_answer = String::new();
        stdin().read_line(&mut user_answer).unwrap();
        let user_answer = user_answer.trim();

        // Call services
        let question_request = tonic::Request::new(QuestionCreateRequest {
            text: user_question.to_string(),
        });

        let question_response = question_client.create(question_request).await?;
        println!("Got: '{:#?}' from question service", question_response.into_inner());

        let answer_request = tonic::Request::new(AnswerCreateRequest {
            text: user_answer.to_string(),
        });

        let answer_response = answer_client.create(answer_request).await?;
        println!("Got: '{:#?}' from answer service", answer_response.into_inner());
    }
}
