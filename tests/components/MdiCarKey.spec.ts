
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarKey from "../../src/components/MdiCarKey.vue";

test("MdiCarKey snapshot", () => {
  const wrapper = mount(MdiCarKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
