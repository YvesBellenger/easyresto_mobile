<template>
  <Page class="login-page">
    <ActionBar class="action-bar" title="Login">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <FlexboxLayout>
        <StackLayout class="login">
            
        <TextField :text="textFieldValue" autocorrect="false" hint="Email" />
        <TextField :text="textFieldValue" autocorrect="false" secure="true" hint="Mot de passe" />
        <Button class="btn btn-primary">Se connecter</Button>
        <Button class="btn btn-primary">S'inscrire</Button>


        <!-- <b-field label="Name">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field label="Subject">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field> -->

        </StackLayout>
    </FlexboxLayout>

  </Page>
</template>

<script>

// import Buefy from 'buefy';

  export default {
    data () {
      return {
        surprise: false,
      };
    },
  };
</script>

<style scoped>

  FlexboxLayout{
    justify-content: center;
    align-items: center;
    background-size: cover;
    /* background-image: url("~/images/background.jpg"); */
  }

  StackLayout {
    width: 300;
    padding: 10 16;
    background-color: #f0f0f0;
  }

  .login {
    display: flex;
    /* margin: 0 auto; */
  }

  TextField {
      margin: 20px;
  }

</style>
