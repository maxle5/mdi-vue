
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisXRotateCounterclockwise from "../../src/components/MdiAxisXRotateCounterclockwise.vue";

test("MdiAxisXRotateCounterclockwise snapshot", () => {
  const wrapper = mount(MdiAxisXRotateCounterclockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
