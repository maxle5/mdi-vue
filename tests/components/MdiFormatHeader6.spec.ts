
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader6 from "../../src/components/MdiFormatHeader6.vue";

test("MdiFormatHeader6 snapshot", () => {
  const wrapper = mount(MdiFormatHeader6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
