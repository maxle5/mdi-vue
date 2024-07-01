
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignHorizontalDistribute from "../../src/components/MdiAlignHorizontalDistribute.vue";

test("MdiAlignHorizontalDistribute snapshot", () => {
  const wrapper = mount(MdiAlignHorizontalDistribute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
