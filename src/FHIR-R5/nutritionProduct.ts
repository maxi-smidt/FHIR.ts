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
import { Annotation } from './annotation';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { CodeableReference } from './codeableReference';
import { Extension } from './extension';
import { Id } from './id';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { NutritionProductCharacteristic } from './nutritionProductCharacteristic';
import { NutritionProductIngredient } from './nutritionProductIngredient';
import { NutritionProductInstance } from './nutritionProductInstance';
import { NutritionProductNutrient } from './nutritionProductNutrient';
import { Reference } from './reference';
import { ResourceList } from './resourceList';
import { Uri } from './uri';

/**
 * A food or supplement that is consumed by patients.
 */
export interface NutritionProduct { 
    /**
     * This is a NutritionProduct resource
     */
    resourceType: 'NutritionProduct';
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
    code?: CodeableConcept;
    status?: Code;
    /**
     * Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
     */
    category?: Array<CodeableConcept>;
    /**
     * The organisation (manufacturer, representative or legal authorization holder) that is responsible for the device.
     */
    manufacturer?: Array<Reference>;
    /**
     * The product's nutritional information expressed by the nutrients.
     */
    nutrient?: Array<NutritionProductNutrient>;
    /**
     * Ingredients contained in this product.
     */
    ingredient?: Array<NutritionProductIngredient>;
    /**
     * Allergens that are known or suspected to be a part of this nutrition product.
     */
    knownAllergen?: Array<CodeableReference>;
    /**
     * Specifies descriptive properties of the nutrition product.
     */
    characteristic?: Array<NutritionProductCharacteristic>;
    /**
     * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
     */
    instance?: Array<NutritionProductInstance>;
    /**
     * Comments made about the product.
     */
    note?: Array<Annotation>;
}