import {EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Post: {}
};

const pluralNames = { Post: 'Posts' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
// default api/posts
export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  entityHttpResourceUrls: {
    Post: {
      entityResourceUrl: 'http://localhost:3000/posts',
      collectionResourceUrl: 'http://localhost:3000/posts'
    }
  }
};
