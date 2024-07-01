
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreOutline from "../../src/components/MdiStoreOutline.vue";

test("MdiStoreOutline snapshot", () => {
  const wrapper = mount(MdiStoreOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
