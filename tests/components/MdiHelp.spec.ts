
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelp from "../../src/components/MdiHelp.vue";

test("MdiHelp snapshot", () => {
  const wrapper = mount(MdiHelp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
