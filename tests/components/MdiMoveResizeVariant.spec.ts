
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoveResizeVariant from "../../src/components/MdiMoveResizeVariant.vue";

test("MdiMoveResizeVariant snapshot", () => {
  const wrapper = mount(MdiMoveResizeVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
