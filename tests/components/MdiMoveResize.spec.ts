
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoveResize from "../../src/components/MdiMoveResize.vue";

test("MdiMoveResize snapshot", () => {
  const wrapper = mount(MdiMoveResize, {});
  expect(wrapper.html()).toMatchSnapshot();
});
