
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterWellOutline from "../../src/components/MdiWaterWellOutline.vue";

test("MdiWaterWellOutline snapshot", () => {
  const wrapper = mount(MdiWaterWellOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
