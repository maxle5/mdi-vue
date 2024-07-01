
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherCloudy from "../../src/components/MdiWeatherCloudy.vue";

test("MdiWeatherCloudy snapshot", () => {
  const wrapper = mount(MdiWeatherCloudy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
