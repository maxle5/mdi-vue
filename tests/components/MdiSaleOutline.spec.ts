
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSaleOutline from "../../src/components/MdiSaleOutline.vue";

test("MdiSaleOutline snapshot", () => {
  const wrapper = mount(MdiSaleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
