
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPartlySnowy from "../../src/components/MdiWeatherPartlySnowy.vue";

test("MdiWeatherPartlySnowy snapshot", () => {
  const wrapper = mount(MdiWeatherPartlySnowy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
