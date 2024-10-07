/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './question.pb';
import { GRPC_QUESTION_SERVICE_CLIENT_SETTINGS } from './question.pbconf';
/**
 * Service client implementation for question.QuestionService
 */
@Injectable({ providedIn: 'any' })
export class QuestionServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /question.QuestionService/Create
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.QuestionCreateResponse>>
     */
    create: (
      requestData: thisProto.QuestionCreateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.QuestionCreateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/question.QuestionService/Create',
        requestData,
        requestMetadata,
        requestClass: thisProto.QuestionCreateRequest,
        responseClass: thisProto.QuestionCreateResponse
      });
    },
    /**
     * Unary call: /question.QuestionService/Update
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.QuestionUpdateResponse>>
     */
    update: (
      requestData: thisProto.QuestionUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.QuestionUpdateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/question.QuestionService/Update',
        requestData,
        requestMetadata,
        requestClass: thisProto.QuestionUpdateRequest,
        responseClass: thisProto.QuestionUpdateResponse
      });
    },
    /**
     * Unary call: /question.QuestionService/Delete
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.QuestionDeleteResponse>>
     */
    delete: (
      requestData: thisProto.QuestionDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.QuestionDeleteResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/question.QuestionService/Delete',
        requestData,
        requestMetadata,
        requestClass: thisProto.QuestionDeleteRequest,
        responseClass: thisProto.QuestionDeleteResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_QUESTION_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'question.QuestionService',
      settings
    );
  }

  /**
   * Unary call @/question.QuestionService/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.QuestionCreateResponse>
   */
  create(
    requestData: thisProto.QuestionCreateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.QuestionCreateResponse> {
    return this.$raw
      .create(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/question.QuestionService/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.QuestionUpdateResponse>
   */
  update(
    requestData: thisProto.QuestionUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.QuestionUpdateResponse> {
    return this.$raw
      .update(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/question.QuestionService/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.QuestionDeleteResponse>
   */
  delete(
    requestData: thisProto.QuestionDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.QuestionDeleteResponse> {
    return this.$raw
      .delete(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
