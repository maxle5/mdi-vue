
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreOffOutline from "../../src/components/MdiStoreOffOutline.vue";

test("MdiStoreOffOutline snapshot", () => {
  const wrapper = mount(MdiStoreOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
