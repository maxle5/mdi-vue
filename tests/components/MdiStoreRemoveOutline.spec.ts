
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreRemoveOutline from "../../src/components/MdiStoreRemoveOutline.vue";

test("MdiStoreRemoveOutline snapshot", () => {
  const wrapper = mount(MdiStoreRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
