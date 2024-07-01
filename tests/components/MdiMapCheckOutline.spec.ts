
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapCheckOutline from "../../src/components/MdiMapCheckOutline.vue";

test("MdiMapCheckOutline snapshot", () => {
  const wrapper = mount(MdiMapCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
