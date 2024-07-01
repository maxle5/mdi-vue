
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreRemove from "../../src/components/MdiStoreRemove.vue";

test("MdiStoreRemove snapshot", () => {
  const wrapper = mount(MdiStoreRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
