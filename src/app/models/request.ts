import { Character } from './character';
import { Pagination } from './pagination';

export interface Request {
    info: Pagination;
    results: Character[];
}
