
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreMinusOutline from "../../src/components/MdiStoreMinusOutline.vue";

test("MdiStoreMinusOutline snapshot", () => {
  const wrapper = mount(MdiStoreMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
