
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaOBoxOutline from "../../src/components/MdiAlphaOBoxOutline.vue";

test("MdiAlphaOBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaOBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
