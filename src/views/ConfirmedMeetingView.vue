<template>
    <Transition
        name="bubble"
        mode="out-in"
    >
      <div class="container">
        <div class="confirmedMeetingView">
          <div class="main-info">
            <h1 class="title">Confirmed</h1>
            <h2 class="subtitle">You are scheduled with {{dataInfo['assigned_to']}}.</h2>
            <div class="text-info">
              <img class="icon" src="@/assets/images/svg/calendly-confirmed.svg" alt="confirmed icon">
              <span class="text">{{dataInfo['event_type_name']}}</span>
            </div>
            <p class="time">{{startTime}} - {{endTime}}</p>
            <p class="time-zone">{{timeZone}}</p>
            <p class="mail-info">A calendar invitation has been sent to your email address.</p>
            <router-link class="btn" to="/">Return to the main page</router-link>
          </div>
          <div class="contact-info">
            <ul class="contact-info-list">
              <li class="contact-info-el">
                <a target="_blank" :href="`mailto:${commonData['commonEmail']}`" class="contacts-link">{{commonData['commonEmail']}}</a>
              </li>
              <li class="contact-info-el">
                <a target="_blank" :href="`tel:${commonData['commonPhone']}`" class="contacts-link">{{commonData['commonPhone']}}</a></li>
              <li class="contact-info-el">
                <a target="_blank" :href="commonData['commonTelegram']" class="contacts-link">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "ConfirmedMeetingView",
    props: {
      commonData: Object
    },
    data(){
      return {
        dataInfo: this.$route.query,
      }
    },
    computed:{
      startTime(){
        const gettingDate = new Date(this.dataInfo['event_start_time'] as string);
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        };
        const filteredDate = new Intl.DateTimeFormat('en-US', options).formatToParts(gettingDate).filter(el => el.type !== 'literal');
        const {hour, minute, dayPeriod} = Object.fromEntries(filteredDate.map(item => [item.type, item.value]));
        return `${hour}:${minute}${dayPeriod.toLowerCase()}`
      },
      endTime(){
        const gettingDate = new Date(this.dataInfo['event_end_time'] as string);
        const options: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          day: 'numeric',
          weekday: 'long',
          month: 'long',
          year: 'numeric'
        };
        const filteredDate = new Intl.DateTimeFormat('en-US', options).formatToParts(gettingDate).filter(el => el.type !== 'literal');
        const {hour, minute, dayPeriod, day, weekday, month, year} = Object.fromEntries(filteredDate.map(item => [item.type, item.value]));
        return `${hour}:${minute}${dayPeriod.toLowerCase()}, ${weekday}, ${month} ${day}, ${year}`
      },
      timeZone(){
        const gettingDate = new Date(this.dataInfo['event_end_time'] as string);
        const options: Intl.DateTimeFormatOptions = {
          timeZoneName:'long'
        };
        const filteredDate = new Intl.DateTimeFormat('en-US', options).formatToParts(gettingDate).filter(el => el.type !== 'literal');
        const {timeZoneName} =  Object.fromEntries(filteredDate.map(item => [item.type, item.value]));
        return timeZoneName
      }
    }
  })
</script>

<style lang="scss">
  .confirmedMeetingView{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height:100vh;
    row-gap: 30px;
    padding: 120px 0;
    .main-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        text-align: center;
        font-weight: 700;
        font-size: 36px;
        line-height: 120%;
      }
      .subtitle{
        margin: 10px 0 0;
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
      }
      .text-info{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        padding: 0 0 16px;
        border-bottom: 1px solid var(--color-gray);
        margin: 40px auto 0;
        max-width: 400px;
        width: 100%;
        .icon{
          width: 20px;
          height: 20px;
        }
        .text{
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
        }
      }
      .time{
        margin: 16px 0 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        opacity: 0.5;
      }
      .time-zone{
        margin: 10px 0 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        opacity: 0.5;
      }
      .mail-info{
        margin: 40px 0 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        text-align: center;
      }
      .btn{
        margin: 85px 0 0;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
      }
    }
    .contact-info{
      .contact-info-list{
        display: flex;
        column-gap: 40px;
        opacity: .5;
        .contact-info-el{
          .contacts-link{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
  }
  @media (max-width: 1025px){
    .confirmedMeetingView{
      padding: 160px 0 90px;
      .main-info{
        .title{}
        .subtitle{}
        .text-info{
          .icon{}
          .text{}
        }
        .time{}
        .time-zone{}
        .mail-info{}
        .btn{}
      }
      .contact-info{
        .contact-info-list{
          .contact-info-el{
            .contacts-link{}
          }
        }
      }
    }
  }
  @media (max-width: 660px){
    .confirmedMeetingView{
      padding: 60px 0 30px;
      .main-info{
        .title{}
        .subtitle{}
        .text-info{
          .icon{}
          .text{}
        }
        .time{}
        .time-zone{}
        .mail-info{}
        .btn{
          margin: 40px 0 0;
        }
      }
      .contact-info{
        .contact-info-list{
          flex-direction: column;
          align-items: center;
          row-gap: 16px;
          .contact-info-el{
            .contacts-link{}
          }
        }
      }
    }
  }
</style>