
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListGroup from "../../src/components/MdiFormatListGroup.vue";

test("MdiFormatListGroup snapshot", () => {
  const wrapper = mount(MdiFormatListGroup, {});
  expect(wrapper.html()).toMatchSnapshot();
});
