
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToolbox from "../../src/components/MdiToolbox.vue";

test("MdiToolbox snapshot", () => {
  const wrapper = mount(MdiToolbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
