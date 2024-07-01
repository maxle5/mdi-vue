
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDockTop from "../../src/components/MdiDockTop.vue";

test("MdiDockTop snapshot", () => {
  const wrapper = mount(MdiDockTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
