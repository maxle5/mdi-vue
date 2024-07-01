
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptTextPlay from "../../src/components/MdiScriptTextPlay.vue";

test("MdiScriptTextPlay snapshot", () => {
  const wrapper = mount(MdiScriptTextPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
