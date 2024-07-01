
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHuman from "../../src/components/MdiHuman.vue";

test("MdiHuman snapshot", () => {
  const wrapper = mount(MdiHuman, {});
  expect(wrapper.html()).toMatchSnapshot();
});
