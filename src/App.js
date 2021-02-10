import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greeting from './components/Props';
import Message from './components/State';
import adMessage from './components/State';
import Greet from './components/Destructpropsandstate'
import FunctionClick from './components/Eventhandling'
import ClassClick from './components/Eventhandling'
import EventBind from './components/EventBind'
// import ParentComp from './components/PropsasMethod'
import UserGreet from './components/ConditionalRender'
import NameList from './components/List'
import PersonList from './components/ListandKeys';
import StyleSheet from './components/StylingCss'
import Form from './components/FromHandling'
import FragmentDemo from './components/Fragment'
import ParentComp from './components/ParentComp'
import Memo from './components/Memo'
import RefDemo from './components/Ref'
import Ref2Demo from './components/Ref2'
import RefWithClass from './components/RefWithClass';
import FocusInput from './components/RefWithClass2';
import FRParent from './components/ForwardRefParent'
import Hero from './components/ErrorBoundary'
import HOC from './components/HOC'
import ClickCounter from './components/HOCclickCounter'
import Render from './components/RenderPropsBasic'
import RenderProps from './components/RenderPropsBasic';
import HoverCount from './components/RenderPropsHoverCounter';
// import { UserProvider } from './components/Context';
// import CompA from './components/CompA'
import Counter from './Hooks/Counter'
import CounterTwo from './Hooks/CounterTwo'
import UseStateWithObject from './Hooks/UseStateWithObject';
import CounterWithArr from './Hooks/UseStateWithArray';
import CounterWithEffect from './Hooks/UseEffect';
import IntervalCount from './Hooks/UseEffectWithInterval';
import CompA from './Hooks/usecontext/CompA'
import UserContext from './Hooks/usecontext/UseContext';
import CounterWithReducer from './Hooks/UseReducer';
import CounterWithUseMemo from './Hooks/UseMemo';
import FocusInputRef from './Hooks/UseRef';
import HookTimer from './Hooks/UseRefTimer';
import DocTitle from './customHooks/DocTitle';
import CounterCustom from './customHooks/CounterCustomHook';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome/>
      <Hello/>
      <Greeting name="Bruce" heroName="Batman" >
        <p>This is children of Greeting</p>
      </Greeting> */}
      {/* <Message/>
      <adMessage/> */}
      {/* <Greet name="bruce" /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind/> */}
      
      {/* <ParentComp/> */}
      {/* <UserGreet/> */}
      {/* <NameList /> */}
      {/* <PersonList/> */}
      {/* <StyleSheet /> */}
      {/* <Form/> */}
      {/* <FragmentDemo/> */}
      {/* <ParentComp/> */}
      {/* <Memo/> */}
      {/* <RefDemo/> */}
      {/* <Ref2Demo/> */}
      {/* <FocusInput/> */}
      {/* <FRParent/> */}
      {/* <Hero heroName="Batman">Hi it is error boundary example</Hero> */}
      {/* <Hero heroName="Joker"/> */}
      {/* <ClickCounter heroName="Vishal"/> */}
      {/* <Render name={(isLoggedIn)=>isLoggedIn ? "Vishal" : "Guest" } /> */}
      {/* <RenderProps>{(count,incrementCount)=>(
        <HoverCount count={count} incrementCount={incrementCount}/>
      )}
      </RenderProps> */}
      {/* <UserProvider value="Vishal">
        <CompA/>
      </UserProvider> */}
      {/* <Counter/> */}
      {/* <CounterTwo/> */}
      {/* <UseStateWithObject/> */}
      {/* <CounterWithArr/> */}
      {/* <CounterWithEffect/> */}
      {/* <IntervalCount/> */}
      {/* <UserContext/> */}
      {/* <CounterWithReducer/> */}
      {/* <CounterWithUseMemo/> */}
      {/* <FocusInputRef/> */}
      {/* <HookTimer/> */}
      {/* <DocTitle/> */}
      {/* <CounterCustom/> */}
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;
