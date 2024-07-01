
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherWindyVariant from "../../src/components/MdiWeatherWindyVariant.vue";

test("MdiWeatherWindyVariant snapshot", () => {
  const wrapper = mount(MdiWeatherWindyVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
