
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreCheck from "../../src/components/MdiStoreCheck.vue";

test("MdiStoreCheck snapshot", () => {
  const wrapper = mount(MdiStoreCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
