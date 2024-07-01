
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlopeDownhill from "../../src/components/MdiSlopeDownhill.vue";

test("MdiSlopeDownhill snapshot", () => {
  const wrapper = mount(MdiSlopeDownhill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
