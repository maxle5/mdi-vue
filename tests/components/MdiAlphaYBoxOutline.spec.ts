
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaYBoxOutline from "../../src/components/MdiAlphaYBoxOutline.vue";

test("MdiAlphaYBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaYBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
