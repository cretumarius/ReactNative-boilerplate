import { StyleSheet } from 'react-native';
import { flex_design } from './mixins';

export const commonStyles = StyleSheet.create({
  page: {
    flex: 1,
    ...flex_design('column', 'center', 'center'),
  },
});
