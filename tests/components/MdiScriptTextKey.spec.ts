
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScriptTextKey from "../../src/components/MdiScriptTextKey.vue";

test("MdiScriptTextKey snapshot", () => {
  const wrapper = mount(MdiScriptTextKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
