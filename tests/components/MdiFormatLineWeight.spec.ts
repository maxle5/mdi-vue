
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLineWeight from "../../src/components/MdiFormatLineWeight.vue";

test("MdiFormatLineWeight snapshot", () => {
  const wrapper = mount(MdiFormatLineWeight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
