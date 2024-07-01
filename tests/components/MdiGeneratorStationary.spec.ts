
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGeneratorStationary from "../../src/components/MdiGeneratorStationary.vue";

test("MdiGeneratorStationary snapshot", () => {
  const wrapper = mount(MdiGeneratorStationary, {});
  expect(wrapper.html()).toMatchSnapshot();
});
