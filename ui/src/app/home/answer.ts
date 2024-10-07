import {inject, Injectable} from "@angular/core";
import {AnswerServiceClient} from "../../proto/answer.pbsc";
import {AnswerCreateRequest} from "../../proto/answer.pb";

@Injectable({
    providedIn: 'root'
})
export class AnswerService {

    private client = inject(AnswerServiceClient);

    public create() {
        const request = new AnswerCreateRequest({
            text: 'my answer 1'
        });

        this.client.create(request).subscribe((result) => {
            console.log(result);
        })
    }
}
