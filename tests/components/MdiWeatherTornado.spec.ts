
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherTornado from "../../src/components/MdiWeatherTornado.vue";

test("MdiWeatherTornado snapshot", () => {
  const wrapper = mount(MdiWeatherTornado, {});
  expect(wrapper.html()).toMatchSnapshot();
});
