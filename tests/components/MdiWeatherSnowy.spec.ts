
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSnowy from "../../src/components/MdiWeatherSnowy.vue";

test("MdiWeatherSnowy snapshot", () => {
  const wrapper = mount(MdiWeatherSnowy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
