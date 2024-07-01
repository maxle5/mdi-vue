
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatSize from "../../src/components/MdiFormatSize.vue";

test("MdiFormatSize snapshot", () => {
  const wrapper = mount(MdiFormatSize, {});
  expect(wrapper.html()).toMatchSnapshot();
});
