
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAtom from "../../src/components/MdiAtom.vue";

test("MdiAtom snapshot", () => {
  const wrapper = mount(MdiAtom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
