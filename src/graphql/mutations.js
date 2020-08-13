/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
      sections {
        id
        title
        colletion {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
      sections {
        id
        title
        colletion {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
      sections {
        id
        title
        colletion {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;
