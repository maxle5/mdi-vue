
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader5 from "../../src/components/MdiFormatHeader5.vue";

test("MdiFormatHeader5 snapshot", () => {
  const wrapper = mount(MdiFormatHeader5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
