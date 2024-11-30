// ==================== EXERCISE 1A - 1G + Slides ====================
//
// import React, { useState } from "react";
// import {
//     Text,
//     View,
//     TextInput,
//     Button,
//     Alert,
//     TouchableOpacity,
//     ToastAndroid,
//     ScrollView,
// } from "react-native";
// import RNPickerSelect from "react-native-picker-select";
//
// // re-usable custom component since username and password text input have similar structure
// // pass onChangeText as prop
// const InputBox = ({ label, onChangeText }) => {
//     return (
//         <View>
//             <Text style={{ color: "grey" }}>{label}</Text>
//             <TextInput style={{ borderWidth: 1 }} onChangeText={onChangeText} />
//         </View>
//     );
// };
//
// const MyApp = () => {
//     // declaring a variable with an empty string as default value and a setter function for the variable
//     const [username, setUsername] = useState("");
//     const [usertype, setUsertype] = useState("");
//     const [password, setPassword] = useState("");
//
//     return (
//         <View style={{ padding: 30, paddingTop: 50, paddingBottom: 50 }}>
//             <ScrollView style={{ marginBottom: 30 }}>
//                 {/*EXERCISE 1B*/}
//                 <Text style={{ color: "grey" }}>User Type:</Text>
//                 <RNPickerSelect
//                     onValueChange={(value) => {
//                         setUsertype(value);
//                     }}
//                     items={[
//                         { label: "Admin", value: "Admin" },
//                         { label: "Guest", value: "Guest" },
//                     ]}
//                 />
//
//                 <InputBox
//                     label="User Name:"
//                     onChangeText={(text) => setUsername(text)}
//                 />
//                 <InputBox
//                     label="Password:"
//                     // when text in text input box is changed, password value is set to the value in TextInput by calling the setter function (setPassword())
//                     onChangeText={(text) => setPassword(text)}
//                 />
//
//                 {/*EXERCISE 1G*/}
//                 {/*<Text>User Name:</Text>*/}
//                 {/*<TextInput*/}
//                 {/*    style={{ borderWidth: 1 }}*/}
//                 {/*    onChangeText={(text) => {*/}
//                 {/*        setUsername(text);*/}
//                 {/*    }}*/}
//                 {/*/>*/}
//
//                 {/*EXERCISE 1A*/}
//                 {/*<Text>Password: </Text>*/}
//                 {/*<TextInput*/}
//                 {/*    style={{ borderWidth: 1 }}*/}
//                 {/*    onChangeText={(text) => setPassword(text)}*/}
//                 {/*/>*/}
//
//                 {/*EXERCISE 1C & 1D*/}
//                 {/*<Button*/}
//                 {/*    title="LOG IN"*/}
//                 {/*    onPress={() => Alert.alert("Welcome!")}*/}
//                 {/*/>*/}
//
//                 {/*EXERCISE 1E*/}
//                 {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
//                 {/*  <Text>LOG IN</Text>*/}
//                 {/*</TouchableOpacity>*/}
//
//                 {/*EXERCISE 1F & 1G*/}
//                 <TouchableOpacity
//                     onPress={() => {
//                         // ToastAndroid.show(
//                         //     `Welcome ${usertype} ${username}!`,
//                         //     ToastAndroid.SHORT,
//                         // )
//
//                         // setting a correct password, success msg and error msg for incorrect password
//                         const correctPassword = "123";
//                         let myMessage = "Error! Wrong Password!";
//                         if (password === correctPassword) {
//                             myMessage = "Welcome " + usertype + " " + username;
//                         }
//                         ToastAndroid.show(myMessage, ToastAndroid.SHORT);
//                     }}
//                 >
//                     <Text style={{ color: "grey" }}>LOG IN</Text>
//                 </TouchableOpacity>
//                 <Text style={{ color: "grey" }}>{password}</Text>
//             </ScrollView>
//         </View>
//     );
// };
//
// export default MyApp;

// ==================== EXERCISE 2 ====================

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    Image,
    ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
    useFonts,
    ArbutusSlab_400Regular,
} from "@expo-google-fonts/arbutus-slab";

const styles = StyleSheet.create({
    Image: {
        width: "100vw",
        height: 100,
        alignSelf: "center",
        // resize,
    },
    Text: {
        color: "grey",
    },
    Question: {
        color: "white",
    },
});

const questionImg = {
    Bee: require("./assets/img/bee.jpg"),
    Kingfisher: require("./assets/img/kingfisher.jpg"),
    Deer: require("./assets/img/deer.jpg"),
};

const Question = ({
    imgName,
    imgHeight,
    option1,
    option2,
    option3,
    correctAnswer,
    setAnswer,
}) => {
    return (
        <View>
            <Image source={imgName} style={styles.Image} />

            <Text style={{ color: "grey" }}>What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    setAnswer(value, correctAnswer);
                }}
                items={[
                    { label: `${option1}`, value: `${option1}` },
                    { label: `${option2}`, value: `${option2}` },
                    { label: `${option3}`, value: `${option3}` },
                ]}
            />
        </View>
    );
};

const MyApp = () => {
    const [answer, setAnswer] = useState("");
    useFonts({ Arbutus_Slab: ArbutusSlab_400Regular });
    const checkAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            console.log("Correct answer");
        }
    };

    return (
        <View style={{ padding: 30, paddingTop: 50, paddingBottom: 50 }}>
            <ScrollView style={{ marginBottom: 30 }}>
                {/*Header*/}
                <Text>{"\n"}</Text>
                <Text
                    style={{
                        alignSelf: "center",
                        color: "blue",
                        fontSize: 30,
                        fontFamily: "Arbutus_Slab",
                        paddingBottom: 20,
                    }}
                >
                    Quiz
                </Text>

                {/*Question 1*/}
                <Question
                    imgName={questionImg["Bee"]}
                    imgHeight={278}
                    option1="Bee"
                    option2="Moth"
                    option3="Fly"
                    correctAnswer="Bee"
                />

                {/*<Image source={require('./assets/img/bee.jpg')} alt={"bee"}*/}
                {/*       style={{width: 371, height: 278, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Bee', value: 'Bee'},*/}
                {/*        {label: 'Moth', value: 'Moth'},*/}
                {/*        {label: 'Fly', value: 'Fly'},*/}
                {/*    ]}*/}
                {/*/>*/}

                {/*Question 2*/}
                <Text>{"\n"}</Text>
                <Question
                    imgName={questionImg["Kingfisher"]}
                    imgHeight={247}
                    option1="Hummingbird"
                    option2="Kingfisher"
                    option3="Eastern Bluebird"
                    correctAnswer="Kingfisher"
                />

                {/*<Text>{'\n'}</Text>*/}
                {/*<Image source={require('./assets/img/kingfisher.jpg')} alt={"kingfisher"}*/}
                {/*       style={{width: 371, height: 247, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Hummingbird', value: 'Hummingbird'},*/}
                {/*        {label: 'Kingfisher', value: 'Kingfisher'},*/}
                {/*        {label: 'Eastern Bluebird', value: 'Eastern Bluebird'},*/}
                {/*    ]}*/}
                {/*/>*/}

                {/*Question 3*/}
                <Text>{"\n"}</Text>
                <Question
                    imgName={questionImg["Deer"]}
                    imgHeight={297}
                    option1="Deer"
                    option2="Chinkara"
                    option3="Blackbuck"
                    correctAnswer="Deer"
                />

                {/*<Text>{'\n'}</Text>*/}
                {/*<Image source={require('./assets/img/deer.jpg')} alt={"deer"}*/}
                {/*       style={{width: 371, height: 297, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Deer', value: 'deer'},*/}
                {/*        {label: 'Chinkara', value: 'chinkara'},*/}
                {/*        {label: 'Blackbuck', value: 'blackbuck'},*/}
                {/*    ]}*/}
                {/*/>*/}
            </ScrollView>

            <Button
                title="SUBMIT"
                onPress={() => {
                    const correctAnswer1 = "bee";
                    let resultmsg = "Good Try! 0/3";
                }}
            />
        </View>
    );
};

export default MyApp;
