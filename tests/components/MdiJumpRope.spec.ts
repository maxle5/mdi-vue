
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJumpRope from "../../src/components/MdiJumpRope.vue";

test("MdiJumpRope snapshot", () => {
  const wrapper = mount(MdiJumpRope, {});
  expect(wrapper.html()).toMatchSnapshot();
});
