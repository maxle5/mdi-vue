
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelOff from "../../src/components/MdiLabelOff.vue";

test("MdiLabelOff snapshot", () => {
  const wrapper = mount(MdiLabelOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
