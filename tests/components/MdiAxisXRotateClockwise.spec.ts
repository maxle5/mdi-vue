
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisXRotateClockwise from "../../src/components/MdiAxisXRotateClockwise.vue";

test("MdiAxisXRotateClockwise snapshot", () => {
  const wrapper = mount(MdiAxisXRotateClockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
