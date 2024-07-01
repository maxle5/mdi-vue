
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSafeSquare from "../../src/components/MdiSafeSquare.vue";

test("MdiSafeSquare snapshot", () => {
  const wrapper = mount(MdiSafeSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
