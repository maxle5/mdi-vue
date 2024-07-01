
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxIntermediate from "../../src/components/MdiCheckboxIntermediate.vue";

test("MdiCheckboxIntermediate snapshot", () => {
  const wrapper = mount(MdiCheckboxIntermediate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
