
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvPlugType1 from "../../src/components/MdiEvPlugType1.vue";

test("MdiEvPlugType1 snapshot", () => {
  const wrapper = mount(MdiEvPlugType1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
