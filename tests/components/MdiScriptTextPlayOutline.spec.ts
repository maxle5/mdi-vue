
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptTextPlayOutline from "../../src/components/MdiScriptTextPlayOutline.vue";

test("MdiScriptTextPlayOutline snapshot", () => {
  const wrapper = mount(MdiScriptTextPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
