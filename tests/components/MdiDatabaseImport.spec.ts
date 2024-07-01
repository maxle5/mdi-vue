
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseImport from "../../src/components/MdiDatabaseImport.vue";

test("MdiDatabaseImport snapshot", () => {
  const wrapper = mount(MdiDatabaseImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
