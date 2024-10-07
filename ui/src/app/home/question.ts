import {inject, Injectable} from "@angular/core";
import {QuestionServiceClient} from "../../proto/question.pbsc";
import {QuestionCreateRequest} from "../../proto/question.pb";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    private client = inject(QuestionServiceClient);

    public create() {
        const request = new QuestionCreateRequest({
            text: 'my question 1'
        });

        this.client.create(request).subscribe((result) => {
            console.log(result);
        })
    }
}
