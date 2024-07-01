
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorizontalRotateCounterclockwise from "../../src/components/MdiHorizontalRotateCounterclockwise.vue";

test("MdiHorizontalRotateCounterclockwise snapshot", () => {
  const wrapper = mount(MdiHorizontalRotateCounterclockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
