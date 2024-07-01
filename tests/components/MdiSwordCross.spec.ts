
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwordCross from "../../src/components/MdiSwordCross.vue";

test("MdiSwordCross snapshot", () => {
  const wrapper = mount(MdiSwordCross, {});
  expect(wrapper.html()).toMatchSnapshot();
});
