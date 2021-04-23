import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  Create,
  TextInput,
  DateField,
  EditButton,
  SimpleShowLayout,
  Show,
  required,
  DeleteButton,
} from 'react-admin';

export const ServicesList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="_id" />
      <TextField source="service" />
      <TextField source="price" />
      <DateField source="createdAt" />
      <EditButton basePath="/services" />
      <DeleteButton basePath="services" />
    </Datagrid>
  </List>
);

export const ServiceEdit = (props) => (
  <Edit title="Service Edit" {...props}>
    <SimpleForm>
      <TextInput disabled source="_id" />
      <TextInput source="service" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export const ServiceCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="service" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);
export const ServiceShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextInput disabled source="_id" />
      <TextInput source="service" />
      <DateField label="Publication date" source="createdAt" />
    </SimpleShowLayout>
  </Show>
);
