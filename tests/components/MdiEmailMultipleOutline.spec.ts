
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailMultipleOutline from "../../src/components/MdiEmailMultipleOutline.vue";

test("MdiEmailMultipleOutline snapshot", () => {
  const wrapper = mount(MdiEmailMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
