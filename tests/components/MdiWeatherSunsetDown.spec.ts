
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunsetDown from "../../src/components/MdiWeatherSunsetDown.vue";

test("MdiWeatherSunsetDown snapshot", () => {
  const wrapper = mount(MdiWeatherSunsetDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
