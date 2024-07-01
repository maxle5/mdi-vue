
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatBold from "../../src/components/MdiFormatBold.vue";

test("MdiFormatBold snapshot", () => {
  const wrapper = mount(MdiFormatBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
