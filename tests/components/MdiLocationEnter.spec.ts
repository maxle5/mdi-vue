
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLocationEnter from "../../src/components/MdiLocationEnter.vue";

test("MdiLocationEnter snapshot", () => {
  const wrapper = mount(MdiLocationEnter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
