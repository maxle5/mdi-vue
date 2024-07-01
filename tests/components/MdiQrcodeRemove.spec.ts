
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQrcodeRemove from "../../src/components/MdiQrcodeRemove.vue";

test("MdiQrcodeRemove snapshot", () => {
  const wrapper = mount(MdiQrcodeRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
