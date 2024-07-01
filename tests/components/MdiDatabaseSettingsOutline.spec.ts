
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSettingsOutline from "../../src/components/MdiDatabaseSettingsOutline.vue";

test("MdiDatabaseSettingsOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
