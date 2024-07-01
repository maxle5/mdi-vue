
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreSettingsOutline from "../../src/components/MdiStoreSettingsOutline.vue";

test("MdiStoreSettingsOutline snapshot", () => {
  const wrapper = mount(MdiStoreSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
