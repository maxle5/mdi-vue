
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherMoonsetUp from "../../src/components/MdiWeatherMoonsetUp.vue";

test("MdiWeatherMoonsetUp snapshot", () => {
  const wrapper = mount(MdiWeatherMoonsetUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
