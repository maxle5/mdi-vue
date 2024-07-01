
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseSync from "../../src/components/MdiDatabaseSync.vue";

test("MdiDatabaseSync snapshot", () => {
  const wrapper = mount(MdiDatabaseSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
