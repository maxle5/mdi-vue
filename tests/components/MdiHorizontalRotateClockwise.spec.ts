
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorizontalRotateClockwise from "../../src/components/MdiHorizontalRotateClockwise.vue";

test("MdiHorizontalRotateClockwise snapshot", () => {
  const wrapper = mount(MdiHorizontalRotateClockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
