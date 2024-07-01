
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreSettings from "../../src/components/MdiStoreSettings.vue";

test("MdiStoreSettings snapshot", () => {
  const wrapper = mount(MdiStoreSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
