
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCheckOutline from "../../src/components/MdiFileCheckOutline.vue";

test("MdiFileCheckOutline snapshot", () => {
  const wrapper = mount(MdiFileCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
