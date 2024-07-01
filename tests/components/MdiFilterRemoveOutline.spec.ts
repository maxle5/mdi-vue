
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterRemoveOutline from "../../src/components/MdiFilterRemoveOutline.vue";

test("MdiFilterRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFilterRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
