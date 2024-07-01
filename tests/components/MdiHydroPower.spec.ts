
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHydroPower from "../../src/components/MdiHydroPower.vue";

test("MdiHydroPower snapshot", () => {
  const wrapper = mount(MdiHydroPower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
