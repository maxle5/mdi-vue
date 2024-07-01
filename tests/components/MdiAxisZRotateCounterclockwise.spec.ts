
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisZRotateCounterclockwise from "../../src/components/MdiAxisZRotateCounterclockwise.vue";

test("MdiAxisZRotateCounterclockwise snapshot", () => {
  const wrapper = mount(MdiAxisZRotateCounterclockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
