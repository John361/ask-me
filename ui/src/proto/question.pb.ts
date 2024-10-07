/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for question.QuestionCreateRequest
 */
export class QuestionCreateRequest implements GrpcMessage {
  static id = 'question.QuestionCreateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionCreateRequest();
    QuestionCreateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionCreateRequest) {
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionCreateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionCreateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionCreateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.text) {
      _writer.writeString(1, _instance.text);
    }
  }

  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionCreateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionCreateRequest.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    QuestionCreateRequest.refineValues(this);
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionCreateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionCreateRequest.AsObject {
    return {
      text: this.text
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionCreateRequest.AsProtobufJSON {
    return {
      text: this.text
    };
  }
}
export module QuestionCreateRequest {
  /**
   * Standard JavaScript object representation for QuestionCreateRequest
   */
  export interface AsObject {
    text: string;
  }

  /**
   * Protobuf JSON representation for QuestionCreateRequest
   */
  export interface AsProtobufJSON {
    text: string;
  }
}

/**
 * Message implementation for question.QuestionUpdateRequest
 */
export class QuestionUpdateRequest implements GrpcMessage {
  static id = 'question.QuestionUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionUpdateRequest();
    QuestionUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionUpdateRequest) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
  }

  private _id: string;
  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionUpdateRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    QuestionUpdateRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionUpdateRequest.AsObject {
    return {
      id: this.id,
      text: this.text
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionUpdateRequest.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module QuestionUpdateRequest {
  /**
   * Standard JavaScript object representation for QuestionUpdateRequest
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for QuestionUpdateRequest
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for question.QuestionDeleteRequest
 */
export class QuestionDeleteRequest implements GrpcMessage {
  static id = 'question.QuestionDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionDeleteRequest();
    QuestionDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionDeleteRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionDeleteRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionDeleteRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    QuestionDeleteRequest.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionDeleteRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionDeleteRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module QuestionDeleteRequest {
  /**
   * Standard JavaScript object representation for QuestionDeleteRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for QuestionDeleteRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for question.QuestionCreateResponse
 */
export class QuestionCreateResponse implements GrpcMessage {
  static id = 'question.QuestionCreateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionCreateResponse();
    QuestionCreateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionCreateResponse) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionCreateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionCreateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionCreateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
  }

  private _id: string;
  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionCreateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionCreateResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    QuestionCreateResponse.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionCreateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionCreateResponse.AsObject {
    return {
      id: this.id,
      text: this.text
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionCreateResponse.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module QuestionCreateResponse {
  /**
   * Standard JavaScript object representation for QuestionCreateResponse
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for QuestionCreateResponse
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for question.QuestionUpdateResponse
 */
export class QuestionUpdateResponse implements GrpcMessage {
  static id = 'question.QuestionUpdateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionUpdateResponse();
    QuestionUpdateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionUpdateResponse) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionUpdateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.text = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionUpdateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionUpdateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.text) {
      _writer.writeString(2, _instance.text);
    }
  }

  private _id: string;
  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionUpdateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionUpdateResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    QuestionUpdateResponse.refineValues(this);
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionUpdateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionUpdateResponse.AsObject {
    return {
      id: this.id,
      text: this.text
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionUpdateResponse.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module QuestionUpdateResponse {
  /**
   * Standard JavaScript object representation for QuestionUpdateResponse
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for QuestionUpdateResponse
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for question.QuestionDeleteResponse
 */
export class QuestionDeleteResponse implements GrpcMessage {
  static id = 'question.QuestionDeleteResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new QuestionDeleteResponse();
    QuestionDeleteResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: QuestionDeleteResponse) {
    _instance.result = _instance.result || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: QuestionDeleteResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.result = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    QuestionDeleteResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: QuestionDeleteResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.result) {
      _writer.writeBool(1, _instance.result);
    }
  }

  private _result: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of QuestionDeleteResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<QuestionDeleteResponse.AsObject>) {
    _value = _value || {};
    this.result = _value.result;
    QuestionDeleteResponse.refineValues(this);
  }
  get result(): boolean {
    return this._result;
  }
  set result(value: boolean) {
    this._result = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    QuestionDeleteResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): QuestionDeleteResponse.AsObject {
    return {
      result: this.result
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): QuestionDeleteResponse.AsProtobufJSON {
    return {
      result: this.result
    };
  }
}
export module QuestionDeleteResponse {
  /**
   * Standard JavaScript object representation for QuestionDeleteResponse
   */
  export interface AsObject {
    result: boolean;
  }

  /**
   * Protobuf JSON representation for QuestionDeleteResponse
   */
  export interface AsProtobufJSON {
    result: boolean;
  }
}
