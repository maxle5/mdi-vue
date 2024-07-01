
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeader1 from "../../src/components/MdiFormatHeader1.vue";

test("MdiFormatHeader1 snapshot", () => {
  const wrapper = mount(MdiFormatHeader1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
