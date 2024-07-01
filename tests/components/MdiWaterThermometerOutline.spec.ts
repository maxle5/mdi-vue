
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterThermometerOutline from "../../src/components/MdiWaterThermometerOutline.vue";

test("MdiWaterThermometerOutline snapshot", () => {
  const wrapper = mount(MdiWaterThermometerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
