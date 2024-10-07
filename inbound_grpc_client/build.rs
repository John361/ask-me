fn main () -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::compile_protos("../protos/answer.proto")?;
    tonic_build::compile_protos("../protos/question.proto")?;

    Ok(())
}
