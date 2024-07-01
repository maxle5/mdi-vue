
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeatLegroomReduced from "../../src/components/MdiSeatLegroomReduced.vue";

test("MdiSeatLegroomReduced snapshot", () => {
  const wrapper = mount(MdiSeatLegroomReduced, {});
  expect(wrapper.html()).toMatchSnapshot();
});
