
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlopeUphill from "../../src/components/MdiSlopeUphill.vue";

test("MdiSlopeUphill snapshot", () => {
  const wrapper = mount(MdiSlopeUphill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
