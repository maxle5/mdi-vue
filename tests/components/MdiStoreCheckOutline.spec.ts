
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreCheckOutline from "../../src/components/MdiStoreCheckOutline.vue";

test("MdiStoreCheckOutline snapshot", () => {
  const wrapper = mount(MdiStoreCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
