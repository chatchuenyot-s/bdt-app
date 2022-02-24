import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SuportTicketServiceBase } from "./base/suportTicket.service.base";

@Injectable()
export class SuportTicketService extends SuportTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
