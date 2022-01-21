import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import  Loader  from './Loader';
import { useNavigate } from "react-router-dom";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary,
  },
  header: {
    backgroundColor: theme.colors.textSecondary,
  },
  picker: {
    margin: 10,
    borderWidth:0,
    borderColor: theme.colors.textSecondary,
    backgroundColor: theme.colors.textSecondary,
  },
  text: {
    marginLeft: 10,
  },
   search: {
    margin: 10,
    height: 30,
    fontSize: theme.fontSizes.body,
  },
});

const ItemSeparator = () => (<View style={styles.separator}/>);

const HeaderComponent = ({ orderBy, setOrderBy, onChangeSearch, searchQuery }) => {

  return (
      <View style={styles.header}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} style={styles.search}/>
        <Picker
          selectedValue={ orderBy}
          onValueChange={(value) => setOrderBy(value)}
          mode="dialog" // Android only
          style={styles.picker}
        >
          <Picker.Item label="Select an item..." value="Unknown" />
          <Picker.Item label="Latest repositories" value="CREATED_AT" />
          <Picker.Item label="Highest rated repositories" value="DESC" />
          <Picker.Item label="Lowest rated repositories" value="ASC" />
        </Picker>
    </View>
  );
};

export const RepositoryListContainer = ({ repositories, onEndReach }) => {

  let navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <Pressable onPress={() => navigate("/info", {state:{repositoryId: item.id}}) }>
                                <RepositoryItem item={item}/>
                              </Pressable>}                       
    keyExtractor={item => item.id}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
  />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('');
  const [searchWord, setSearchWord] = React.useState('');
  const [searchKeyword] = useDebounce(searchWord, 1000);
  const { repositories, loading, fetchMore } = useRepositories({ orderBy, searchKeyword,  first: 4 });
  
  return (
    loading
     ? <Loader/>
     : 
     <>
       <HeaderComponent orderBy={orderBy} setOrderBy={setOrderBy} onChangeSearch={setSearchWord} searchQuery={searchWord} />
       <RepositoryListContainer repositories={repositories} onEndReach={fetchMore}/>
     </>
  ) 
};

export default RepositoryList;