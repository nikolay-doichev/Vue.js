export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://findacoachproject-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://findacoachproject-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseDate = await response.json();

    if (!response.ok) {
      const error = new Error(responseDate.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseDate) {
      const coach = {
        id: key,
        firstName: responseDate[key].firstName,
        lastName: responseDate[key].lastName,
        description: responseDate[key].description,
        hourlyRate: responseDate[key].hourlyRate,
        areas: responseDate[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
