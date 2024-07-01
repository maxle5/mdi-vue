
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSyncOutline from "../../src/components/MdiDatabaseSyncOutline.vue";

test("MdiDatabaseSyncOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
