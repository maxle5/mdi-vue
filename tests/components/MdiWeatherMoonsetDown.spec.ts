
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherMoonsetDown from "../../src/components/MdiWeatherMoonsetDown.vue";

test("MdiWeatherMoonsetDown snapshot", () => {
  const wrapper = mount(MdiWeatherMoonsetDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
