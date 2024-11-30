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
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
    useFonts,
    ArbutusSlab_400Regular,
} from "@expo-google-fonts/arbutus-slab";
import {Poppins_400Regular} from "@expo-google-fonts/poppins";
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    Image: {
        width: 370,
        height: 370,
        alignSelf: "center",
        // resizeMode: "contain",
        marginTop: 20,
        // borderStyle: "dotted",
        // borderWidth: 1,
    },
    Question: {
        color: "grey",
        fontSize: 15,
        alignSelf: "center",
        fontFamily: "Poppins",
        lineHeight: 25,
    },
    Header: {
        alignSelf: "center",
        color: "dimgrey",
        fontSize: 30,
        fontFamily: "Arbutus_Slab",
        marginBottom: 10,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "dimgrey",
        borderStyle: "dashed",
        lineHeight: 40,
    }
});

const MyApp = () => {
    // after npx expo install @expo-google-fonts/arbutus-slab
    // and adding importing it and useFonts
    // add line below ("Arbutus_Slab: " is optional, it is like a custom name that you can change)
    useFonts({
        Arbutus_Slab: ArbutusSlab_400Regular,
        Poppins: Poppins_400Regular,
    });

    const [answers, setAnswers] = useState([]);

    // const checkAnswer = (correctAnswer) => {
    //      answer === correctAnswer
    //         ? console.log("Correct answer")
    //         : console.log("Wrong answer")
    // };

    // takes index defined in <Question ... />, so that value of that qn no can be written over
    // !!! order of parameters matter a lot, pass the arguments in the same order as called in Question onValueChange !!!
    const handleAnswerChange = (index, value) => {
        setAnswers((prev) => {
            // create a new array based on prev state
            const updateAnswers = [...prev];
            updateAnswers[index] = value;

            return updateAnswers;
        });
    };

    const handleSubmit = () => {
        let score = 0;
        if (answers[0] === "Birman Cat") score += 1;
        if (answers[1] === "Calico Cat") score += 1;
        if (answers[2] === "Sand Cat") score += 1;

        console.log(answers);

        let finalScore = score;
        let alertMsg = "";

        if (finalScore === 3) {
            alertMsg = "Excellent job! You scored 3/3!";
        } else if (finalScore === 2) {
            alertMsg = "Good job! You scored 2/3!";
        } else if (finalScore === 1) {
            alertMsg = "Nice try! You scored 1/3.";
        } else if (finalScore === 0) {
            alertMsg = "Better luck next time!";
        } else {
            alertMsg = "random debug msg to pinpoint error blah blah blah";
        }

        Alert.alert(alertMsg);
    };

    const questionList = [
        {
            id: "qn1",
            img: require("./assets/img/birman_cat.jpg"),
            option1: "Ragdoll Cat",
            option2: "Snowshoe Cat",
            option3: "Siamese Cat",
            option4: "Birman Cat",
        },
        {
            id: "qn2",
            img: require("./assets/img/calico_cat.jpg"),
            option1: "Tuxedo Cat",
            option2: "Orange Cat",
            option3: "Calico Cat",
            option4: "Chimera Cat",
        },
        {
            id: "qn3",
            img: require("./assets/img/sand_cat.jpg"),
            option1: "Fawn Cat",
            option2: "Sand Cat",
            option3: "Tabby Cat",
            option4: "Beige Cat",
        },
    ];

    const Question = ({ index, img, option1, option2, option3, option4 }) => {
        return (
            <View>
                <Image source={img} style={styles.Image} />

                <Text style={styles.Question}>What type of cat is this?</Text>
                {/*i genuinely dont know how to phrase this qn better sorry*/}
                <RNPickerSelect
                    onValueChange={(value) => {
                        handleAnswerChange(index, value);
                    }}
                    items={[
                        { label: option1, value: option1 },
                        { label: option2, value: option2 },
                        { label: option3, value: option3 },
                        { label: option4, value: option4 },
                    ]}
                    // update value of dropdown box
                    value={answers[index]}
                />
            </View>
        );
    };

    return (
        <View style={{ margin: 20, marginTop: 50, marginBottom: 50 }}>
            <ScrollView style={{ marginBottom: 20 }}>
                {/*Header*/}
                <Text style={styles.Header}>
                    <Icon name="cat" size={30} color="dimgrey" /> Cat Types Quiz
                </Text>

                {/*Questions*/}
                {/*using the re-usable custom component more efficiently compared to prev attempt based on new knowledge learnt :D*/}
                {questionList.map((qn, index) => (
                    <Question
                        key={qn.id}
                        index={index}
                        img={qn.img}
                        option1={qn.option1}
                        option2={qn.option2}
                        option3={qn.option3}
                        option4={qn.option4}
                    />
                ))}
            </ScrollView>

            <Button title="SUBMIT" onPress={handleSubmit} />
        </View>
    );
};

export default MyApp;
