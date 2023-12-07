// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// console.log(StatusBar.currentHeight);

console.log(Platform.OS);
export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: 'red', fontWeight: '300' }}>SECONDARY SCHOOL </Text>
      <Text style={{ fontSize: 47, color: 'red', fontWeight: 'bold', paddingBottom: 30 }}>STUDENT CV </Text>

      <Text style={{ fontSize: 20, color: 'white', backgroundColor: 'gray', paddingBottom: 10 }}>Persomable and hardworking student,
        recently reciving exellent GCSE scores in Math (A),
        Geography (B), English(A), and ICT(A). Highly adept at
        teamwork and communication due to experience working with
        PETA and serving as secondary school football captain.
        Awarded Duke of Edinburgh Silver Award. Aiming to leverage
        communication and inter-personal skills to fill the part-Time
        Customer Service position at DVLA Swansea.  </Text>

      <Text style={{ fontSize: 35, color: 'gray', fontWeight: '200', fontStyle: 'italic', textDecorationLine: 'underline', paddingBottom: 9 }}>EDUCATION</Text>

      <Text style={{ fontSize: 25, color: 'white' }}>COWBRIDGE COMPREHENSIVE SCHOOL (2016-PRESENT) </Text>
      <Text style={{ fontSize: 20, color: 'white', paddingBottom: 5 }}>{'A-Levels: Welsh (A), Math (A), Geography (B), Government (B)\nGCSEs: English (A), Welsh (A), Math (A), ICT (A), Gography (B)'}</Text>
      <Text style={{ fontSize: 35, color: 'gray', fontWeight: '100', fontStyle: 'italic', textDecorationLine: 'underline', paddingBottom: 9 }}>EXTRACURRICULAR ACTIVITES</Text>

      <Text style={{ fontSize: 25, color: 'white' }}>COWBRIDGE COMPREHENSIVE SCHOOL | Cowbridge, UK</Text>
      <Text style={{ fontSize: 19, color: 'gray', fontWeight: 'bold', fontStyle: 'italic' }}>Captain, Football club Sales associate, Dec 2019 - Present</Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}> {'\u2043    Lead and mentored 12+ member football team, using leadership and teaching skills to coach them on proper playys and manovers'} </Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}>{"\u2043    Under my leadership and guidance s captain, the team has won 12 consecutive matches against opposing schools and achived a Burton House's House Cup victory"}</Text>
      <Text style={{ fontSize: 25, color: 'white' }}>DUKE OF EDINBURGH AWARD (SILVER)</Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}>{'\u2023    Participated in local community project to relocate a nursing home in cowbridge,personally assisting 100+ elderly patients during a 6-monthperiod in packing and moving'}</Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}>{'\u2023     Helped 20+ OAPs in the local community with gradening'}</Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}>{'\u2023     Fundraised £200 for PETA, 40% higher than previous DofE participants'}</Text>
      <Text style={{ fontSize: 23, color: 'white', fontWeight: '100', paddingLeft: 40 }}>{'\u2023     Collaberated with a 6-person team to navigate Gwendraeth valley, helping pitch tents, and cook food for a 3-day, 2-night trek.'}</Text>
      <Text style={{ fontSize: 20, color: 'gray', fontWeight: '100', paddingLeft: 340,paddingTop:50 }}>07017545611</Text>
      <Text style={{ fontSize: 20, color: 'gray', fontWeight: '100', paddingLeft: 340 }}>Innocentballing@gmail.com</Text>
      <Text style={{ fontSize: 20, color: 'gray', fontWeight: '100', paddingLeft: 340 }}>House 41,Phase3, kubwa, Abuja </Text>
      <Text style={{ fontSize: 20, color: 'gray', fontWeight: '100', paddingLeft: 340}}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null
    ,
    backgroundColor: 'black',
    alignItems: 'top',
    justifyContent: 'top',
  },
});
