
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisZRotateClockwise from "../../src/components/MdiAxisZRotateClockwise.vue";

test("MdiAxisZRotateClockwise snapshot", () => {
  const wrapper = mount(MdiAxisZRotateClockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});
