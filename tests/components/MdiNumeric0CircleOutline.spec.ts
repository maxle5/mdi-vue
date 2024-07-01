
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0CircleOutline from "../../src/components/MdiNumeric0CircleOutline.vue";

test("MdiNumeric0CircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric0CircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
