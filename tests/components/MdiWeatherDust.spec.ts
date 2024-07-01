
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherDust from "../../src/components/MdiWeatherDust.vue";

test("MdiWeatherDust snapshot", () => {
  const wrapper = mount(MdiWeatherDust, {});
  expect(wrapper.html()).toMatchSnapshot();
});
