
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorse from "../../src/components/MdiHorse.vue";

test("MdiHorse snapshot", () => {
  const wrapper = mount(MdiHorse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
