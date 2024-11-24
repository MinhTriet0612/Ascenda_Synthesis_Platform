

[![wakatime](https://wakatime.com/badge/user/018c1be4-f54c-4a1b-9251-889508522a9a/project/e2d707f5-2f37-4d56-b8ba-6bf6b4a7ab36.svg)](https://wakatime.com/@minhtriet06/projects/xnpvwfjalu?start=2024-11-18&end=2024-11-24)

# **Homework**

## **Overview**
The **Supplier Data Aggregator** is a TypeScript-based application designed to synthesize data from multiple suppliers. It fetches raw data, maps it to a standardized format, and returns a consolidated list of formatted data to the user. The app supports scalability by allowing new suppliers to be easily integrated.

---

## **Project Structure**

```plaintext
./src
├── app.ts                      # Main entry point of the application
├── context
│   └── HotelStore.ts           # Context for managing hotel-related data
├── controller
│   ├── OperationType.ts        # Enum for defining operation types
│   └── SupplierController.ts   # Controller to manage suppliers and operations
├── factory
│   └── SupplierFactory.ts      # Factory for creating supplier-specific operations
├── logger
│   └── Logger.ts               # Utility for logging messages and errors
├── mapper
│   ├── AcmeQueryMapper.ts      # Mapper for Acme supplier queries
│   ├── PaperFliesQueryMapper.ts # Mapper for PaperFlies supplier queries
│   ├── PatagoniaQueryMapper.ts # Mapper for Patagonia supplier queries
│   └── SupplierQueryMapper.ts  # Base mapper for supplier queries
├── model
│   ├── Amentity.ts             # Model representing hotel amenities
│   ├── Hotel.ts                # Model representing hotel data
│   ├── ImageStore.ts           # Model for managing hotel images
│   └── Location.ts             # Model for hotel location data
├── operations
│   ├── Operation.ts            # Abstract operation class
│   ├── SupplierOperation.ts    # Base operation class for suppliers
│   └── impl
│       ├── AcmeOperation.ts    # Implementation of operations for Acme supplier
│       ├── PaperFliesOperation.ts # Implementation for PaperFlies supplier
│       └── PatagoniaOperation.ts # Implementation for Patagonia supplier
├── pipeline
│   └── Pipeline.ts             # Pipeline for sequential operation execution
└── queryDTOs
    ├── AcmeQueryDTO.ts         # Data Transfer Object (DTO) for Acme supplier
    ├── PaperFliesQueryDTO.ts   # DTO for PaperFlies supplier
    ├── PatagoniaQueryDTO.ts    # DTO for Patagonia supplier
    └── SupplierQueryDTO.ts     # Base DTO for suppliers
./test
├── controller
│   └── SupplierController.test.ts
├── factory
│   └── SupplierOperationFactory.test.ts
└── mapper
    ├── AcmeQueryMapper.test.ts
    ├── PaperFliesQueryMapper.test.ts
    └── PatagoniaQueryMapper.test.ts

```

## **Features**
- Fetch data from multiple suppliers via their URLs.
- Map supplier-specific raw data into a standardized format.
- Queue-based operation pipeline for sequential processing.
- Easy integration for adding new suppliers and new model types dynamically.

---

## **Architecture**

### **Components**
1. **Controller**:
   - Allocates operations to the corresponding supplier handler based on the URL.
   - Manages a queue of operations for processing supplier data.

2. **Operation**:
   - Fetches raw data from the assigned supplier.
   - Each operation is unique to a specific supplier.

3. **Mapper**:
   - Maps supplier-specific data into a standardized format for consistent outputs.

### **Design Patterns**

- **Factory Pattern**:  
  Creates new operation instances dynamically for each supplier URL.
- **Pipeline Pattern**:  
  Ensures sequential execution of operations in a modular and controlled manner.


---
## **Testing**
### **Code Coverage**
```shell 
---------------------------|---------|----------|---------|---------|-------------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
---------------------------|---------|----------|---------|---------|-------------------------
All files                  |   90.71 |    76.07 |   94.28 |   90.44 |                         
 controller                |      80 |    83.33 |   71.42 |   77.77 |                         
  OperationType.ts         |     100 |      100 |     100 |     100 |                         
  SupplierController.ts    |      75 |       75 |   66.66 |      75 | 30-32,39                
 factory                   |   92.85 |       80 |   66.66 |   92.85 |                         
  SupplierFactory.ts       |   92.85 |       80 |   66.66 |   92.85 | 34                      
 logger                    |    87.5 |        0 |     100 |    87.5 |                         
  Logger.ts                |    87.5 |        0 |     100 |    87.5 | 14                      
 mapper                    |     100 |    88.54 |     100 |     100 |                         
  AcmeQueryMapper.ts       |     100 |      100 |     100 |     100 |                         
  PaperFliesQueryMapper.ts |     100 |    88.04 |     100 |     100 | 11-39                   
  PatagoniaQueryMapper.ts  |     100 |      100 |     100 |     100 |                         
 model                     |    92.7 |    80.32 |     100 |   92.55 |                         
  Amentity.ts              |   86.66 |       80 |     100 |   84.61 | 15,27                   
  Hotel.ts                 |     100 |    82.45 |     100 |     100 | 23-29,49-55,65-66,74-80 
  ImageStore.ts            |   81.25 |    66.66 |     100 |   81.25 | 15,27,39                
  Location.ts              |    91.3 |    80.55 |     100 |    91.3 | 14,26                   
 operations                |      70 |       50 |   83.33 |      70 |                         
  SupplierOperation.ts     |      70 |       50 |   83.33 |      70 | 18,23-24,36-37,42       
 operations/impl           |   82.05 |     4.34 |     100 |   80.55 |                         
  AcmeOperation.ts         |     100 |      100 |     100 |     100 |                         
  PaperFliesOperation.ts   |   69.56 |     4.34 |     100 |   68.18 | 31-41,47                
  PatagoniaOperation.ts    |     100 |      100 |     100 |     100 |                         
 pipeline                  |     100 |      100 |     100 |     100 |                         
  Pipeline.ts              |     100 |      100 |     100 |     100 |                         
---------------------------|---------|----------|---------|---------|-------------------------
```
---

## **Tech Stack**
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **Testing Framework**: [Jest](https://jestjs.io/)

---

## **Setup Instructions**

### **1. Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **2. Clone the Repository**
