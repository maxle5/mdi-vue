
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSunnyAlert from "../../src/components/MdiWeatherSunnyAlert.vue";

test("MdiWeatherSunnyAlert snapshot", () => {
  const wrapper = mount(MdiWeatherSunnyAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
