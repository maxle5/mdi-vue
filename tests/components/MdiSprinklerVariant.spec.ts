
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSprinklerVariant from "../../src/components/MdiSprinklerVariant.vue";

test("MdiSprinklerVariant snapshot", () => {
  const wrapper = mount(MdiSprinklerVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
