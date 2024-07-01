
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDockRight from "../../src/components/MdiDockRight.vue";

test("MdiDockRight snapshot", () => {
  const wrapper = mount(MdiDockRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
