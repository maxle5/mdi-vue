
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherNightPartlyCloudy from "../../src/components/MdiWeatherNightPartlyCloudy.vue";

test("MdiWeatherNightPartlyCloudy snapshot", () => {
  const wrapper = mount(MdiWeatherNightPartlyCloudy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
