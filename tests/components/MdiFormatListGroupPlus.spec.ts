
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListGroupPlus from "../../src/components/MdiFormatListGroupPlus.vue";

test("MdiFormatListGroupPlus snapshot", () => {
  const wrapper = mount(MdiFormatListGroupPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
