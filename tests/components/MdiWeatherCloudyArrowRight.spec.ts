
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherCloudyArrowRight from "../../src/components/MdiWeatherCloudyArrowRight.vue";

test("MdiWeatherCloudyArrowRight snapshot", () => {
  const wrapper = mount(MdiWeatherCloudyArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
