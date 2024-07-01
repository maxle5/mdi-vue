
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxPlusOutline from "../../src/components/MdiAccountBoxPlusOutline.vue";

test("MdiAccountBoxPlusOutline snapshot", () => {
  const wrapper = mount(MdiAccountBoxPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
