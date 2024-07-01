
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherLightning from "../../src/components/MdiWeatherLightning.vue";

test("MdiWeatherLightning snapshot", () => {
  const wrapper = mount(MdiWeatherLightning, {});
  expect(wrapper.html()).toMatchSnapshot();
});
