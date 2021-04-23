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
  RichTextField,
  DeleteButton,
  ArrayInput,
  SimpleFormIterator,
  FormDataConsumer,
  SearchInput,
  Filter,
} from 'react-admin';

const planFliter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />
  </Filter>
);

export const PlanList = (props) => (
  <List {...props}>
    <Datagrid>
      <SearchInput source="plans"></SearchInput>
      <TextField source="_id" />
      <TextField source="planTitle" />
      <DateField source="createdAt" />
      <TextField source="planFeatures" />
      <TextField source="planPrice" />
      <EditButton basePath="/plans" />
      <DeleteButton basePath="plans" />
    </Datagrid>
  </List>
);

// const PostTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.title}"` : ''}</span>;
// };

export const PlanEdit = (props) => (
  <Edit title="Plan Edit" {...props}>
    <SimpleForm>
      <TextInput disabled source="_id" />
      <TextInput source="planTitle" />
      <DateField source="createdAt" />
      <ArrayInput source="planFeatures">
        <SimpleFormIterator disableRemove>
          <TextInput source="planFeatures" />
          <FormDataConsumer>
            {({ getSource, scopedFormData }) => {
              return (
                <TextField
                  source={getSource('planFeatures')}
                  record={scopedFormData}
                />
              );
            }}
          </FormDataConsumer>
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="planPrice" />
    </SimpleForm>
  </Edit>
);

export const PlanCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="planTitle" />
      <ArrayInput source="planFeatures">
        <SimpleFormIterator disableRemove>
          <TextInput source="planFeatures" />
          <FormDataConsumer>
            {({ getSource, scopedFormData }) => {
              return (
                <TextField
                  source={getSource('planFeatures')}
                  record={scopedFormData}
                />
              );
            }}
          </FormDataConsumer>
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="planPrice" />
    </SimpleForm>
  </Create>
);
export const PlanShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="_id" />
      <TextField source="planTitle" />
      <RichTextField source="planFeatures" />
      <TextField source="planPrice" />
      <DateField label="Publication date" source="createdAt" />
    </SimpleShowLayout>
  </Show>
);
