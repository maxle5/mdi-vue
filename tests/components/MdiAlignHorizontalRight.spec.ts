
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignHorizontalRight from "../../src/components/MdiAlignHorizontalRight.vue";

test("MdiAlignHorizontalRight snapshot", () => {
  const wrapper = mount(MdiAlignHorizontalRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
