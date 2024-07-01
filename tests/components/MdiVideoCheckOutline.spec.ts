
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoCheckOutline from "../../src/components/MdiVideoCheckOutline.vue";

test("MdiVideoCheckOutline snapshot", () => {
  const wrapper = mount(MdiVideoCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
