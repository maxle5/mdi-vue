
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunset from "../../src/components/MdiWeatherSunset.vue";

test("MdiWeatherSunset snapshot", () => {
  const wrapper = mount(MdiWeatherSunset, {});
  expect(wrapper.html()).toMatchSnapshot();
});
