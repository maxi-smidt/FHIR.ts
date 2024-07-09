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
import { Address } from './address';
import { Age } from './age';
import { Annotation } from './annotation';
import { Attachment } from './attachment';
import { Availability } from './availability';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Coding } from './coding';
import { ContactDetail } from './contactDetail';
import { ContactPoint } from './contactPoint';
import { Count } from './count';
import { DataRequirement } from './dataRequirement';
import { Distance } from './distance';
import { Dosage } from './dosage';
import { Duration } from './duration';
import { Expression } from './expression';
import { ExtendedContactDetail } from './extendedContactDetail';
import { Extension } from './extension';
import { HumanName } from './humanName';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Money } from './money';
import { ParameterDefinition } from './parameterDefinition';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Ratio } from './ratio';
import { RatioRange } from './ratioRange';
import { Reference } from './reference';
import { RelatedArtifact } from './relatedArtifact';
import { SampledData } from './sampledData';
import { Signature } from './signature';
import { Timing } from './timing';
import { TriggerDefinition } from './triggerDefinition';
import { UsageContext } from './usageContext';

/**
 * A task to be performed.
 */
export interface TaskOutput { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    type: CodeableConcept;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBase64Binary?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueBoolean?: boolean;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCanonical?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueCode?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDate?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDateTime?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueDecimal?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueId?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInstant?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueInteger64?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueMarkdown?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueOid?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valuePositiveInt?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueString?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueTime?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUnsignedInt?: number;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUri?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUrl?: string;
    /**
     * The value of the Output parameter as a basic type.
     */
    valueUuid?: string;
    valueAddress?: Address;
    valueAge?: Age;
    valueAnnotation?: Annotation;
    valueAttachment?: Attachment;
    valueCodeableConcept?: CodeableConcept;
    valueCodeableReference?: CodeableReference;
    valueCoding?: Coding;
    valueContactPoint?: ContactPoint;
    valueCount?: Count;
    valueDistance?: Distance;
    valueDuration?: Duration;
    valueHumanName?: HumanName;
    valueIdentifier?: Identifier;
    valueMoney?: Money;
    valuePeriod?: Period;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueRatioRange?: RatioRange;
    valueReference?: Reference;
    valueSampledData?: SampledData;
    valueSignature?: Signature;
    valueTiming?: Timing;
    valueContactDetail?: ContactDetail;
    valueDataRequirement?: DataRequirement;
    valueExpression?: Expression;
    valueParameterDefinition?: ParameterDefinition;
    valueRelatedArtifact?: RelatedArtifact;
    valueTriggerDefinition?: TriggerDefinition;
    valueUsageContext?: UsageContext;
    valueAvailability?: Availability;
    valueExtendedContactDetail?: ExtendedContactDetail;
    valueDosage?: Dosage;
    valueMeta?: Meta;
}