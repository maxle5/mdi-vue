
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignVerticalDistribute from "../../src/components/MdiAlignVerticalDistribute.vue";

test("MdiAlignVerticalDistribute snapshot", () => {
  const wrapper = mount(MdiAlignVerticalDistribute, {});
  expect(wrapper.html()).toMatchSnapshot();
});
