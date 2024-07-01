
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterRemove from "../../src/components/MdiFilterRemove.vue";

test("MdiFilterRemove snapshot", () => {
  const wrapper = mount(MdiFilterRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
