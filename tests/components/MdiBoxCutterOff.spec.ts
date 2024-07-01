
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoxCutterOff from "../../src/components/MdiBoxCutterOff.vue";

test("MdiBoxCutterOff snapshot", () => {
  const wrapper = mount(MdiBoxCutterOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
