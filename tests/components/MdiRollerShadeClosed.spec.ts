
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerShadeClosed from "../../src/components/MdiRollerShadeClosed.vue";

test("MdiRollerShadeClosed snapshot", () => {
  const wrapper = mount(MdiRollerShadeClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
