
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignHorizontalCenter from "../../src/components/MdiAlignHorizontalCenter.vue";

test("MdiAlignHorizontalCenter snapshot", () => {
  const wrapper = mount(MdiAlignHorizontalCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
