
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptTextKeyOutline from "../../src/components/MdiScriptTextKeyOutline.vue";

test("MdiScriptTextKeyOutline snapshot", () => {
  const wrapper = mount(MdiScriptTextKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
