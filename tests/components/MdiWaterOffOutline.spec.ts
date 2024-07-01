
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterOffOutline from "../../src/components/MdiWaterOffOutline.vue";

test("MdiWaterOffOutline snapshot", () => {
  const wrapper = mount(MdiWaterOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
