
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountConvertOutline from "../../src/components/MdiAccountConvertOutline.vue";

test("MdiAccountConvertOutline snapshot", () => {
  const wrapper = mount(MdiAccountConvertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
