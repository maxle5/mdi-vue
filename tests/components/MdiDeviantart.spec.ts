
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeviantart from "../../src/components/MdiDeviantart.vue";

test("MdiDeviantart snapshot", () => {
  const wrapper = mount(MdiDeviantart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
