<template>
    <div class="page-login">
        <form class="login-form" @submit.prevent="signup">
            <h1>Sign up</h1>
            <div class="form-input-material">
                <input type="text" name="name" id="name" placeholder=" " autocomplete="off"
                    class="form-control-material" v-model="name" required/>
                <label for="username">Username</label>
            </div>
            <div class="form-input-material">
                <input type="password" name="password" id="password" placeholder=" " autocomplete="off"
                    class="form-control-material" v-model="password" required />
                <label for="password">Password</label>
            </div>
            <button type="submit" class="btn btn-primary btn-ghost">Sign up</button>
            <p>Already have accout?<router-link to="/login">Log in</router-link></p>
        </form>
    </div>
</template>


<style lang="scss">
.page-login {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
  padding: 8px 20px;
  border-radius: 0;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      var(--primary-color),
      transparent
    );
    transform: translateX(-100%);
    transition: 0.6s;
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 20px 10px hsla(204, 70%, 53%, 0.5);

    &::before {
      transform: translateX(100%);
    }
  }
}

.form-input-material {
  --input-default-border-color: white;
  --input-border-bottom-color: white;

  input {
    color: white;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem;
  margin-top: 3rem;
  color: white;
  background: #363636;
  border-radius: 10px;
  box-shadow: 0 0.4px 0.4px rgba(128, 128, 128, 0.109),
    0 1px 1px rgba(128, 128, 128, 0.155),
    0 2.1px 2.1px rgba(128, 128, 128, 0.195),
    0 4.4px 4.4px rgba(128, 128, 128, 0.241),
    0 12px 12px rgba(128, 128, 128, 0.35);

  h1 {
    margin: 0 0 1.6rem 0;
    font-size: 2rem;
    font-weight: bolder;
  }

  .form-input-material {
    margin: 12px 0;
  }

  .btn {
    width: 100%;
    margin: 18px 0 9px 0;
  }

  a:hover {
      background: transparent;
      color: #2D9CDB;
  }
}
</style> 

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            password: '',
            userId: '',
        }
    },
    mounted() {
        document.title = "Sign up | 5YouWant"
    },
    methods: {
        async signup() {
            const { name, password } = this

            await axios.get('/api/user/register', {
                params: {
                    name,
                    password
                }
            }).then(res => {
                if (res.data != 'isexist') {
                    this.$router.push('/login')
                } else {
                  alert('Username already exists')
                  console.log("sign up fail, server error");
                }
            }).catch(err => {
                console.log(err);
            })

        }
    }
}
</script>