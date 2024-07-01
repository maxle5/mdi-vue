
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusOutline from "../../src/components/MdiPlusOutline.vue";

test("MdiPlusOutline snapshot", () => {
  const wrapper = mount(MdiPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
