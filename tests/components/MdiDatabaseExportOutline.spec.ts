
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseExportOutline from "../../src/components/MdiDatabaseExportOutline.vue";

test("MdiDatabaseExportOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseExportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
