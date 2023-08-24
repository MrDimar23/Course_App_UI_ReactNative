
import React from "react";
import { 
    SafeAreaView,
    View,
    Text, 
    TextInput, 
    FlatList, 
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";
import courses from "../../const/Courses";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {

    const CourseCard = ({course}) => {
        return <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CourseScreen', {data: course} )} >
            <ImageBackground source={course.image} 
            style={{
                marginVertical:15,
                marginHorizontal:5,
                borderRadius: 50,
                width: windowWidth/2 - 30,
                height: windowHeight/3,
                overflow: 'hidden',
                paddingTop: 25,
                paddingLeft:20,
                borderRadius: 15
            }}>
                <Text style={{ paddingBottom:5, fontSize:17, fontWeight: 'bold'}}>{course.name}</Text>
                <Text style={{color: '#8F95B2', fontWeight: '600'}}>
                    {course.totalCourse + ' Courses'}
                </Text>
            </ImageBackground>
        </TouchableOpacity>;
    }
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#ffffff',
                flex:1,
                paddingHorizontal:20
            }}>
           <View 
                style={{
                    marginTop:20
                }}
           >
                <Text style={{fontSize:19,fontWeight: 'bold'}}>Hey Dmitry!</Text>
                <Text style={{fontSize:16, marginTop: 15, color: '#61688B'}}>Find a cours you want a learn</Text>

            <View
                 style={{
                 height: 50,
                 marginTop: 25,
                 paddingTop: 10,
                 paddingBottom: 10,
                 paddingLeft: 5,
                 backgroundColor: '#F5F5F7',
                 borderRadius: 30,
                 alignItems: 'center',
                 flexDirection: 'row',
            }}>
              <Icon size={30} name="search" />
             <TextInput
            style={{fontSize: 17, marginLeft: 5}}
            placeholder="Search for anything"
            />
           </View>  
           <View
                style={{
                paddingVertical: 25,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6E8AFA'}}>
                 See All
                </Text>
            </View>
           </View>
           <View style={{flex: 1}}>
                <FlatList showsVerticalScrollIndicator={false} 
                numColumns={2} 
                data={courses}
                keyExtractor={(item, index) =>index.toString()}
                renderItem={({item}) => <CourseCard course={item} />} />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;