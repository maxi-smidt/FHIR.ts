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
import { CodeableConcept } from './codeableConcept';
import { Duration } from './duration';
import { Extension } from './extension';
import { MeasureReportComponent } from './measureReportComponent';
import { MeasureReportPopulation1 } from './measureReportPopulation1';
import { Period } from './period';
import { Quantity } from './quantity';
import { Range } from './range';
import { Reference } from './reference';

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReportStratum { 
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    valueCodeableConcept?: CodeableConcept;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    valueBoolean?: boolean;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
    /**
     * A stratifier component value.
     */
    component?: Array<MeasureReportComponent>;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: Array<MeasureReportPopulation1>;
    measureScoreQuantity?: Quantity;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScoreDateTime?: string;
    measureScoreCodeableConcept?: CodeableConcept;
    measureScorePeriod?: Period;
    measureScoreRange?: Range;
    measureScoreDuration?: Duration;
}