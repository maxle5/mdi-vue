
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunsetUp from "../../src/components/MdiWeatherSunsetUp.vue";

test("MdiWeatherSunsetUp snapshot", () => {
  const wrapper = mount(MdiWeatherSunsetUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
