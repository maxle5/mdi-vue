
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreSearch from "../../src/components/MdiStoreSearch.vue";

test("MdiStoreSearch snapshot", () => {
  const wrapper = mount(MdiStoreSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
