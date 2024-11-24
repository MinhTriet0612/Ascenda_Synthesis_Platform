import { OperationType } from "../src/controller/constraints/OperationType";
import { SupplierOperationFactory } from "../src/factory/SupplierFactory";
import { AcmeOperation } from "../src/operations/impl/AcmeOperation";
import { PaperFliesOperation } from "../src/operations/impl/PaperFliesOperation";
import { PatagoniaOperation } from "../src/operations/impl/PatagoniaOperation";

describe('SupplierOperationFactory', () => {
  it('should return AcmeOperation for ACME URL', () => {
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme';
    const operation = SupplierOperationFactory.getOperationFactory(url);
    expect(operation).toBeInstanceOf(AcmeOperation);
  });

  it('should return PaperFliesOperation for PaperFlies URL', () => {
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies';
    const operation = SupplierOperationFactory.getOperationFactory(url);
    expect(operation).toBeInstanceOf(PaperFliesOperation);
  });

  it('should return PatagoniaOperation for Patagonia URL', () => {
    const url = 'https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia';
    const operation = SupplierOperationFactory.getOperationFactory(url);
    expect(operation).toBeInstanceOf(PatagoniaOperation);
  });

  it('should throw an error if URL is not found', () => {
    const url = "https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acmes"; expect(() => {
      SupplierOperationFactory.getOperationFactory(url);
    }).toThrowError("No operation found")
  });
  it('should add a new operation for a new URL', () => {
    const newUrl = 'https://newsupplier.com/suppliers/new';
    const newOperationType = OperationType.ACME;

    // Initially, the URL should not exist
    expect(() => {
      SupplierOperationFactory.getOperationFactory(newUrl);
    }).toThrowError('No operation found for the given URL');

    // Add the new operation
    SupplierOperationFactory.addOperationFactory(newUrl, newOperationType);

    // Now it should return an AcmeOperation
    const operation = SupplierOperationFactory.getOperationFactory(newUrl);
    expect(operation).toBeInstanceOf(AcmeOperation);
  });
})
