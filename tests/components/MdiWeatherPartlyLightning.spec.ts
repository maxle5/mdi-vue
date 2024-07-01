
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPartlyLightning from "../../src/components/MdiWeatherPartlyLightning.vue";

test("MdiWeatherPartlyLightning snapshot", () => {
  const wrapper = mount(MdiWeatherPartlyLightning, {});
  expect(wrapper.html()).toMatchSnapshot();
});
