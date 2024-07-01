
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaLBoxOutline from "../../src/components/MdiAlphaLBoxOutline.vue";

test("MdiAlphaLBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaLBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
