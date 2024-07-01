
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseExport from "../../src/components/MdiDatabaseExport.vue";

test("MdiDatabaseExport snapshot", () => {
  const wrapper = mount(MdiDatabaseExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
