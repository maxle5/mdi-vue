
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRollerbladeOff from "../../src/components/MdiRollerbladeOff.vue";

test("MdiRollerbladeOff snapshot", () => {
  const wrapper = mount(MdiRollerbladeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
