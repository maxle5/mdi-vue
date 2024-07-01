
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAtomVariant from "../../src/components/MdiAtomVariant.vue";

test("MdiAtomVariant snapshot", () => {
  const wrapper = mount(MdiAtomVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
