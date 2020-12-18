// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

import BookCount from "../components/BookCount";
import CustomActionButton from "../components/CustomActionButton";
import { Ionicons } from "@expo/vector-icons";

import colors from "../assets/colors";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: "",
      books: [],
      bookData: {
        author: "",
        publisher: "",
      },
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };

  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };

  addBook = (book) => {
    this.setState(
      (state, props) => ({
        books: [...state.books, book],
        totalCount: state.totalCount + 1,
        readingCount: state.readingCount + 1,
      }),
      () => {
        // console.log(this.state);
      }
    );
    this.hideAddNewBook();
  };

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter((book) => book !== selectedBook);

    this.setState((prevState) => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1,
    }));
  };

  renderItem = (item, index) => (
    <View style={styles.listItemOuterView}>
      <View style={styles.listItemInnerView}>
        <Text>{item}</Text>
      </View>
      <CustomActionButton
        style={styles.markAsReadButton}
        onPress={() => this.markAsRead(item, index)}
      >
        <Text style={styles.markAsReadText}>Mark as Read</Text>
      </CustomActionButton>
    </View>
  );

  render() {
    return (
      <View style={styles.headerOuterView}>
        <SafeAreaView style={{}} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Book Worm</Text>
        </View>
        <View style={styles.newBookInputOuterOuterView}>
          {this.state.isAddNewBookVisible ? (
            <View style={styles.newBookInputOuterView}>
              <TextInput
                onChangeText={(text) => this.setState({ textInputData: text })}
                style={styles.newBookInput}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
              />
              <CustomActionButton
                style={{ backgroundColor: colors.bgSuccess }}
                onPress={() => this.addBook(this.state.textInputData)}
              >
                <Ionicons name="ios-checkmark" color="#ffffff" size={40} />
              </CustomActionButton>
              <CustomActionButton onPress={this.hideAddNewBook}>
                <Ionicons name="ios-close" color="#ffffff" size={40} />
              </CustomActionButton>
            </View>
          ) : null}

          <FlatList
            data={this.state.books}
            renderItem={({ item }, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={styles.listEmpty}>
                <Text style={styles.listEmptyText}>Not Reading Any Books.</Text>
              </View>
            }
          />

          <CustomActionButton
            position="right"
            style={styles.showAddNewBookButton}
            onPress={this.showAddNewBook}
          >
            <Text style={styles.showAddNewBookButtonText}>+</Text>
          </CustomActionButton>
        </View>
        <View style={styles.footer}>
          <BookCount title="Total" count={this.state.totalCount} />
          <BookCount title="Reading" count={this.state.readingCount} />
          <BookCount title="Read" count={this.state.readCount} />
        </View>
        <SafeAreaView style={{}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerOuterView: { flex: 1 },
  header: {
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 24 },
  newBookInputOuterOuterView: { flex: 1 },
  newBookInputOuterView: { height: 50, flexDirection: "row" },
  newBookInput: {
    flex: 1,
    backgroundColor: colors.bgTextInput,
    paddingLeft: 5,
  },
  listEmpty: { marginTop: 50, alignItems: "center" },
  listEmptyText: { fontWeight: "bold" },
  listItemOuterView: { height: 50, flexDirection: "row" },
  listItemInnerView: { flex: 1, justifyContent: "center", paddingLeft: 5 },
  markAsReadButton: { width: 100, backgroundColor: colors.bgSuccess },
  markAsReadText: { fontWeight: "bold", color: "#ffffff" },
  showAddNewBookButton: { backgroundColor: colors.bgPrimary, borderRadius: 25 },
  showAddNewBookButtonText: { color: "#ffffff", fontSize: 30 },
  footer: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderColor,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: { height: 50, width: 50, backgroundColor: "red" },
});
