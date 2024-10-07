use domain::answer::AnswerService;
use domain::question::QuestionService;
use outbound_db_log::answer::AnswerRepositoryDbLog;
use outbound_db_log::question::QuestionRepositoryDbLog;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let answer_outbound = AnswerRepositoryDbLog::default();
    let question_outbound = QuestionRepositoryDbLog::default();

    let answer_service = AnswerService::new(answer_outbound);
    let question_service = QuestionService::new(question_outbound);

    inbound_grpc_server::start_server(answer_service, question_service).await
}
