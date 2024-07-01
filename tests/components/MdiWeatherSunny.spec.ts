
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunny from "../../src/components/MdiWeatherSunny.vue";

test("MdiWeatherSunny snapshot", () => {
  const wrapper = mount(MdiWeatherSunny, {});
  expect(wrapper.html()).toMatchSnapshot();
});
