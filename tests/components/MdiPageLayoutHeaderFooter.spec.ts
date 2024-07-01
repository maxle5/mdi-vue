
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutHeaderFooter from "../../src/components/MdiPageLayoutHeaderFooter.vue";

test("MdiPageLayoutHeaderFooter snapshot", () => {
  const wrapper = mount(MdiPageLayoutHeaderFooter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
