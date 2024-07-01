
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEngineOffOutline from "../../src/components/MdiEngineOffOutline.vue";

test("MdiEngineOffOutline snapshot", () => {
  const wrapper = mount(MdiEngineOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
