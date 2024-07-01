
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader3 from "../../src/components/MdiFormatHeader3.vue";

test("MdiFormatHeader3 snapshot", () => {
  const wrapper = mount(MdiFormatHeader3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
