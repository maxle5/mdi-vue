
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormTextarea from "../../src/components/MdiFormTextarea.vue";

test("MdiFormTextarea snapshot", () => {
  const wrapper = mount(MdiFormTextarea, {});
  expect(wrapper.html()).toMatchSnapshot();
});
