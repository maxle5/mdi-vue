
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerRemove from "../../src/components/MdiServerRemove.vue";

test("MdiServerRemove snapshot", () => {
  const wrapper = mount(MdiServerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
