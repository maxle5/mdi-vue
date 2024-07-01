
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEngineOff from "../../src/components/MdiEngineOff.vue";

test("MdiEngineOff snapshot", () => {
  const wrapper = mount(MdiEngineOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
