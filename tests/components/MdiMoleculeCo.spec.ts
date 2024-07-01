
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoleculeCo from "../../src/components/MdiMoleculeCo.vue";

test("MdiMoleculeCo snapshot", () => {
  const wrapper = mount(MdiMoleculeCo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
