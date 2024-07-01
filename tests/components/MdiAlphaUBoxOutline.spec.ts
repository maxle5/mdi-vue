
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaUBoxOutline from "../../src/components/MdiAlphaUBoxOutline.vue";

test("MdiAlphaUBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaUBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
