
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexadecimal from "../../src/components/MdiHexadecimal.vue";

test("MdiHexadecimal snapshot", () => {
  const wrapper = mount(MdiHexadecimal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
