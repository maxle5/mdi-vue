
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyePlusOutline from "../../src/components/MdiEyePlusOutline.vue";

test("MdiEyePlusOutline snapshot", () => {
  const wrapper = mount(MdiEyePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
