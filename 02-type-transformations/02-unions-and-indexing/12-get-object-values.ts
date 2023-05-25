const frontendToBackendEnumMap = {
	singleModule: "SINGLE_MODULE",
	multiModule: "MULTI_MODULE",
	sharedModule: "SHARED_MODULE",
} as const;

// type BackendModuleEnum =
// 	(typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap];

// Cleaning up the solution:

// type FrontendToBackendEnumMap = typeof frontendToBackendEnumMap;

// type BackendModuleEnum =
// 	FrontendToBackendEnumMap[keyof FrontendToBackendEnumMap];

// Or, using a generic (covered in a later module):

type ValueOf<T> = T[keyof T];

type BackendModuleEnum = ValueOf<typeof frontendToBackendEnumMap>;
