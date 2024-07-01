
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMemory from "../../src/components/MdiMemory.vue";

test("MdiMemory snapshot", () => {
  const wrapper = mount(MdiMemory, {});
  expect(wrapper.html()).toMatchSnapshot();
});
