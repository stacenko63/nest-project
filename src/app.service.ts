import {Injectable} from "@nestjs/common";


@Injectable()
export class AppService {
    getUsers() {
        let i: number = 4;
        return [{id: 1, name: 'Viktor'}];
    }
}