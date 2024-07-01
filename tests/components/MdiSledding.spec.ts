
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSledding from "../../src/components/MdiSledding.vue";

test("MdiSledding snapshot", () => {
  const wrapper = mount(MdiSledding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
