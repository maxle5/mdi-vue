
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDockBottom from "../../src/components/MdiDockBottom.vue";

test("MdiDockBottom snapshot", () => {
  const wrapper = mount(MdiDockBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
