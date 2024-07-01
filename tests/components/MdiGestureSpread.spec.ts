
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureSpread from "../../src/components/MdiGestureSpread.vue";

test("MdiGestureSpread snapshot", () => {
  const wrapper = mount(MdiGestureSpread, {});
  expect(wrapper.html()).toMatchSnapshot();
});
