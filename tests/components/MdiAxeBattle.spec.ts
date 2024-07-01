
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxeBattle from "../../src/components/MdiAxeBattle.vue";

test("MdiAxeBattle snapshot", () => {
  const wrapper = mount(MdiAxeBattle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
