
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreEditOutline from "../../src/components/MdiStoreEditOutline.vue";

test("MdiStoreEditOutline snapshot", () => {
  const wrapper = mount(MdiStoreEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
