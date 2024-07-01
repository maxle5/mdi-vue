
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPartlyCloudy from "../../src/components/MdiWeatherPartlyCloudy.vue";

test("MdiWeatherPartlyCloudy snapshot", () => {
  const wrapper = mount(MdiWeatherPartlyCloudy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
