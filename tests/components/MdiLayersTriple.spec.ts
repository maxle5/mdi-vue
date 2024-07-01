
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersTriple from "../../src/components/MdiLayersTriple.vue";

test("MdiLayersTriple snapshot", () => {
  const wrapper = mount(MdiLayersTriple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
