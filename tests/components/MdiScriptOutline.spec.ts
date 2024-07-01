
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptOutline from "../../src/components/MdiScriptOutline.vue";

test("MdiScriptOutline snapshot", () => {
  const wrapper = mount(MdiScriptOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
