
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseImportOutline from "../../src/components/MdiDatabaseImportOutline.vue";

test("MdiDatabaseImportOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseImportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
