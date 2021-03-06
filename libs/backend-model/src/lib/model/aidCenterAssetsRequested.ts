/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AidCenterCategory } from './aidCenterCategory';


export interface AidCenterAssetsRequested { 
    readonly id?: string;
    category: AidCenterCategory;
    note?: string;
    name: string;
    icon?: string;
    is_urgent: boolean;
    status?: AidCenterAssetsRequested.StatusEnum;
}
export namespace AidCenterAssetsRequested {
    export type StatusEnum = 'requested' | 'fulfilled' | 'overloaded';
    export const StatusEnum = {
        Requested: 'requested' as StatusEnum,
        Fulfilled: 'fulfilled' as StatusEnum,
        Overloaded: 'overloaded' as StatusEnum
    };
}


