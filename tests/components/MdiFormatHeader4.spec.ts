
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader4 from "../../src/components/MdiFormatHeader4.vue";

test("MdiFormatHeader4 snapshot", () => {
  const wrapper = mount(MdiFormatHeader4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
