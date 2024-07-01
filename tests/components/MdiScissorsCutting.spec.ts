
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScissorsCutting from "../../src/components/MdiScissorsCutting.vue";

test("MdiScissorsCutting snapshot", () => {
  const wrapper = mount(MdiScissorsCutting, {});
  expect(wrapper.html()).toMatchSnapshot();
});
