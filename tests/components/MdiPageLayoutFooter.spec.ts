
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutFooter from "../../src/components/MdiPageLayoutFooter.vue";

test("MdiPageLayoutFooter snapshot", () => {
  const wrapper = mount(MdiPageLayoutFooter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
