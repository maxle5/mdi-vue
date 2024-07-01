
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptTextOutline from "../../src/components/MdiScriptTextOutline.vue";

test("MdiScriptTextOutline snapshot", () => {
  const wrapper = mount(MdiScriptTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
