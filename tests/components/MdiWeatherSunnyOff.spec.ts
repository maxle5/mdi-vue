
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunnyOff from "../../src/components/MdiWeatherSunnyOff.vue";

test("MdiWeatherSunnyOff snapshot", () => {
  const wrapper = mount(MdiWeatherSunnyOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
