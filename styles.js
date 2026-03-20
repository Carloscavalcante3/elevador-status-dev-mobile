import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 28,
    fontWeight: '500'
  },

  subtitle: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 25
  },

  card: {
    padding: 18,
    borderRadius: 14,
    marginBottom: 12
  },

  cardText: {
    fontSize: 15
  }
});