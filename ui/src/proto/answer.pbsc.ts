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
import * as thisProto from './answer.pb';
import { GRPC_ANSWER_SERVICE_CLIENT_SETTINGS } from './answer.pbconf';
/**
 * Service client implementation for answer.AnswerService
 */
@Injectable({ providedIn: 'any' })
export class AnswerServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /answer.AnswerService/Create
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AnswerCreateResponse>>
     */
    create: (
      requestData: thisProto.AnswerCreateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AnswerCreateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/answer.AnswerService/Create',
        requestData,
        requestMetadata,
        requestClass: thisProto.AnswerCreateRequest,
        responseClass: thisProto.AnswerCreateResponse
      });
    },
    /**
     * Unary call: /answer.AnswerService/Update
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AnswerUpdateResponse>>
     */
    update: (
      requestData: thisProto.AnswerUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AnswerUpdateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/answer.AnswerService/Update',
        requestData,
        requestMetadata,
        requestClass: thisProto.AnswerUpdateRequest,
        responseClass: thisProto.AnswerUpdateResponse
      });
    },
    /**
     * Unary call: /answer.AnswerService/Delete
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.AnswerDeleteResponse>>
     */
    delete: (
      requestData: thisProto.AnswerDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.AnswerDeleteResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/answer.AnswerService/Delete',
        requestData,
        requestMetadata,
        requestClass: thisProto.AnswerDeleteRequest,
        responseClass: thisProto.AnswerDeleteResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ANSWER_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('answer.AnswerService', settings);
  }

  /**
   * Unary call @/answer.AnswerService/Create
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AnswerCreateResponse>
   */
  create(
    requestData: thisProto.AnswerCreateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AnswerCreateResponse> {
    return this.$raw
      .create(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/answer.AnswerService/Update
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AnswerUpdateResponse>
   */
  update(
    requestData: thisProto.AnswerUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AnswerUpdateResponse> {
    return this.$raw
      .update(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/answer.AnswerService/Delete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AnswerDeleteResponse>
   */
  delete(
    requestData: thisProto.AnswerDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.AnswerDeleteResponse> {
    return this.$raw
      .delete(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
