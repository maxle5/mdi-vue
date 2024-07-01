
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleOffOutline from "../../src/components/MdiCircleOffOutline.vue";

test("MdiCircleOffOutline snapshot", () => {
  const wrapper = mount(MdiCircleOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
