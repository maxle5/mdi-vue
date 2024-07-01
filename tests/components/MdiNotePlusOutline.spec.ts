
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotePlusOutline from "../../src/components/MdiNotePlusOutline.vue";

test("MdiNotePlusOutline snapshot", () => {
  const wrapper = mount(MdiNotePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
