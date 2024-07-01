
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerSkateOff from "../../src/components/MdiRollerSkateOff.vue";

test("MdiRollerSkateOff snapshot", () => {
  const wrapper = mount(MdiRollerSkateOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
