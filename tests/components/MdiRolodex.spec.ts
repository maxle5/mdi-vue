
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRolodex from "../../src/components/MdiRolodex.vue";

test("MdiRolodex snapshot", () => {
  const wrapper = mount(MdiRolodex, {});
  expect(wrapper.html()).toMatchSnapshot();
});
