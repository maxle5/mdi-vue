
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSafeSquareOutline from "../../src/components/MdiSafeSquareOutline.vue";

test("MdiSafeSquareOutline snapshot", () => {
  const wrapper = mount(MdiSafeSquareOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
