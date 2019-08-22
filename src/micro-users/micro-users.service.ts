import { Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';

interface UuidService {
  createUuid(data: number): Observable<any>;
}

@Injectable()
export class MicroUsersService implements OnModuleInit {

  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private uuidService: UuidService;

  onModuleInit() {
    this.uuidService = this.client.getService<UuidService>('Uuid');
  }

  getHello(): {} {
    return this.uuidService.createUuid(1);
  }
}
