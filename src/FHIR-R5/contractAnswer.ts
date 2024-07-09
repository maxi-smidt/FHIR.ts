/**
 * FHIR Version R5
 * The following is auto generated resource definition.
 *
 * OpenAPI spec version: 3.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Attachment } from './attachment';
import { Coding } from './coding';
import { Extension } from './extension';
import { Quantity } from './quantity';
import { Reference } from './reference';

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface ContractAnswer { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueBoolean?: boolean;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueDecimal?: number;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueInteger?: number;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueDate?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueDateTime?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueTime?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueString?: string;
    /**
     * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of participation, the date of occupancy of a rental, warranty duration, or whether biospecimen may be used for further research.
     */
    valueUri?: string;
    valueAttachment?: Attachment;
    valueCoding?: Coding;
    valueQuantity?: Quantity;
    valueReference?: Reference;
}