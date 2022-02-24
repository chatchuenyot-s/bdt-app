import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuportTicketService } from "./suportTicket.service";
import { SuportTicketControllerBase } from "./base/suportTicket.controller.base";

@swagger.ApiTags("suport-tickets")
@common.Controller("suport-tickets")
export class SuportTicketController extends SuportTicketControllerBase {
  constructor(
    protected readonly service: SuportTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
