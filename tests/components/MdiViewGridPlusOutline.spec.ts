
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGridPlusOutline from "../../src/components/MdiViewGridPlusOutline.vue";

test("MdiViewGridPlusOutline snapshot", () => {
  const wrapper = mount(MdiViewGridPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
