
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreSearchOutline from "../../src/components/MdiStoreSearchOutline.vue";

test("MdiStoreSearchOutline snapshot", () => {
  const wrapper = mount(MdiStoreSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
