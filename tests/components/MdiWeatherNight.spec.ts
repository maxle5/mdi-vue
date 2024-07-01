
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherNight from "../../src/components/MdiWeatherNight.vue";

test("MdiWeatherNight snapshot", () => {
  const wrapper = mount(MdiWeatherNight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
