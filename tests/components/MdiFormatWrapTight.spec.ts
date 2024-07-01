
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatWrapTight from "../../src/components/MdiFormatWrapTight.vue";

test("MdiFormatWrapTight snapshot", () => {
  const wrapper = mount(MdiFormatWrapTight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
