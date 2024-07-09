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
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Markdown } from './markdown';
import { MarketingStatus } from './marketingStatus';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { PackagedProductDefinitionLegalStatusOfSupply } from './packagedProductDefinitionLegalStatusOfSupply';
import { PackagedProductDefinitionPackaging } from './packagedProductDefinitionPackaging';
import { PackagedProductDefinitionProperty } from './packagedProductDefinitionProperty';
import { Quantity } from './quantity';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A medically related item or items, in a container or package.
 */
export interface PackagedProductDefinition { 
    /**
     * This is a PackagedProductDefinition resource
     */
    resourceType: 'PackagedProductDefinition';
    id?: Id;
    meta?: Meta;
    implicitRules?: Uri;
    language?: Code;
    text?: Narrative;
    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope. This is allowed to be a Parameters resource if and only if it is referenced by a resource that provides context/meaning.
     */
    contained?: Array<ResourceList>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * A unique identifier for this package as whole - not the the content of the package. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
     */
    identifier?: Array<Identifier>;
    name?: string;
    type?: CodeableConcept;
    /**
     * The product this package model relates to, not the contents of the package (for which see package.containedItem).
     */
    packageFor?: Array<Reference>;
    status?: CodeableConcept;
    statusDate?: Date;
    /**
     * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as '28 tablets'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not '2 tubes and 3 tubes'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource.
     */
    containedItemQuantity?: Array<Quantity>;
    description?: Markdown;
    /**
     * The legal status of supply of the packaged item as classified by the regulator.
     */
    legalStatusOfSupply?: Array<PackagedProductDefinitionLegalStatusOfSupply>;
    /**
     * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated.
     */
    marketingStatus?: Array<MarketingStatus>;
    copackagedIndicator?: boolean;
    /**
     * Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer?: Array<Reference>;
    /**
     * Additional information or supporting documentation about the packaged product.
     */
    attachedDocument?: Array<Reference>;
    packaging?: PackagedProductDefinitionPackaging;
    /**
     * Allows the key features to be recorded, such as \"hospital pack\", \"nurse prescribable\", \"calendar pack\".
     */
    characteristic?: Array<PackagedProductDefinitionProperty>;
}