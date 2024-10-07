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
 * Message implementation for answer.AnswerCreateRequest
 */
export class AnswerCreateRequest implements GrpcMessage {
  static id = 'answer.AnswerCreateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerCreateRequest();
    AnswerCreateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerCreateRequest) {
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerCreateRequest,
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

    AnswerCreateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerCreateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.text) {
      _writer.writeString(1, _instance.text);
    }
  }

  private _text: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AnswerCreateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerCreateRequest.AsObject>) {
    _value = _value || {};
    this.text = _value.text;
    AnswerCreateRequest.refineValues(this);
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
    AnswerCreateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerCreateRequest.AsObject {
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
  ): AnswerCreateRequest.AsProtobufJSON {
    return {
      text: this.text
    };
  }
}
export module AnswerCreateRequest {
  /**
   * Standard JavaScript object representation for AnswerCreateRequest
   */
  export interface AsObject {
    text: string;
  }

  /**
   * Protobuf JSON representation for AnswerCreateRequest
   */
  export interface AsProtobufJSON {
    text: string;
  }
}

/**
 * Message implementation for answer.AnswerUpdateRequest
 */
export class AnswerUpdateRequest implements GrpcMessage {
  static id = 'answer.AnswerUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerUpdateRequest();
    AnswerUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerUpdateRequest) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerUpdateRequest,
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

    AnswerUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerUpdateRequest,
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
   * @param _value initial values object or instance of AnswerUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerUpdateRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    AnswerUpdateRequest.refineValues(this);
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
    AnswerUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerUpdateRequest.AsObject {
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
  ): AnswerUpdateRequest.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module AnswerUpdateRequest {
  /**
   * Standard JavaScript object representation for AnswerUpdateRequest
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for AnswerUpdateRequest
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for answer.AnswerDeleteRequest
 */
export class AnswerDeleteRequest implements GrpcMessage {
  static id = 'answer.AnswerDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerDeleteRequest();
    AnswerDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerDeleteRequest) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerDeleteRequest,
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

    AnswerDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AnswerDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerDeleteRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    AnswerDeleteRequest.refineValues(this);
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
    AnswerDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerDeleteRequest.AsObject {
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
  ): AnswerDeleteRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module AnswerDeleteRequest {
  /**
   * Standard JavaScript object representation for AnswerDeleteRequest
   */
  export interface AsObject {
    id: string;
  }

  /**
   * Protobuf JSON representation for AnswerDeleteRequest
   */
  export interface AsProtobufJSON {
    id: string;
  }
}

/**
 * Message implementation for answer.AnswerCreateResponse
 */
export class AnswerCreateResponse implements GrpcMessage {
  static id = 'answer.AnswerCreateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerCreateResponse();
    AnswerCreateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerCreateResponse) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerCreateResponse,
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

    AnswerCreateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerCreateResponse,
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
   * @param _value initial values object or instance of AnswerCreateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerCreateResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    AnswerCreateResponse.refineValues(this);
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
    AnswerCreateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerCreateResponse.AsObject {
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
  ): AnswerCreateResponse.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module AnswerCreateResponse {
  /**
   * Standard JavaScript object representation for AnswerCreateResponse
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for AnswerCreateResponse
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for answer.AnswerUpdateResponse
 */
export class AnswerUpdateResponse implements GrpcMessage {
  static id = 'answer.AnswerUpdateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerUpdateResponse();
    AnswerUpdateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerUpdateResponse) {
    _instance.id = _instance.id || '';
    _instance.text = _instance.text || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerUpdateResponse,
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

    AnswerUpdateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerUpdateResponse,
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
   * @param _value initial values object or instance of AnswerUpdateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerUpdateResponse.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.text = _value.text;
    AnswerUpdateResponse.refineValues(this);
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
    AnswerUpdateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerUpdateResponse.AsObject {
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
  ): AnswerUpdateResponse.AsProtobufJSON {
    return {
      id: this.id,
      text: this.text
    };
  }
}
export module AnswerUpdateResponse {
  /**
   * Standard JavaScript object representation for AnswerUpdateResponse
   */
  export interface AsObject {
    id: string;
    text: string;
  }

  /**
   * Protobuf JSON representation for AnswerUpdateResponse
   */
  export interface AsProtobufJSON {
    id: string;
    text: string;
  }
}

/**
 * Message implementation for answer.AnswerDeleteResponse
 */
export class AnswerDeleteResponse implements GrpcMessage {
  static id = 'answer.AnswerDeleteResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AnswerDeleteResponse();
    AnswerDeleteResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AnswerDeleteResponse) {
    _instance.result = _instance.result || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AnswerDeleteResponse,
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

    AnswerDeleteResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AnswerDeleteResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.result) {
      _writer.writeBool(1, _instance.result);
    }
  }

  private _result: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AnswerDeleteResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AnswerDeleteResponse.AsObject>) {
    _value = _value || {};
    this.result = _value.result;
    AnswerDeleteResponse.refineValues(this);
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
    AnswerDeleteResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AnswerDeleteResponse.AsObject {
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
  ): AnswerDeleteResponse.AsProtobufJSON {
    return {
      result: this.result
    };
  }
}
export module AnswerDeleteResponse {
  /**
   * Standard JavaScript object representation for AnswerDeleteResponse
   */
  export interface AsObject {
    result: boolean;
  }

  /**
   * Protobuf JSON representation for AnswerDeleteResponse
   */
  export interface AsProtobufJSON {
    result: boolean;
  }
}
