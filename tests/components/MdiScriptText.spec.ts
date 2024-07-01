
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptText from "../../src/components/MdiScriptText.vue";

test("MdiScriptText snapshot", () => {
  const wrapper = mount(MdiScriptText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
