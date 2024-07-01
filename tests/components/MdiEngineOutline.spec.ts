
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEngineOutline from "../../src/components/MdiEngineOutline.vue";

test("MdiEngineOutline snapshot", () => {
  const wrapper = mount(MdiEngineOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
