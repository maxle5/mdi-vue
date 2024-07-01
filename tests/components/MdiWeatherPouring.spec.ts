
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPouring from "../../src/components/MdiWeatherPouring.vue";

test("MdiWeatherPouring snapshot", () => {
  const wrapper = mount(MdiWeatherPouring, {});
  expect(wrapper.html()).toMatchSnapshot();
});
