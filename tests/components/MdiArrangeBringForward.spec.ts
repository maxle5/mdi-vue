
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrangeBringForward from "../../src/components/MdiArrangeBringForward.vue";

test("MdiArrangeBringForward snapshot", () => {
  const wrapper = mount(MdiArrangeBringForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
