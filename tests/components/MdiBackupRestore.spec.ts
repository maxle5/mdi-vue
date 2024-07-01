
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBackupRestore from "../../src/components/MdiBackupRestore.vue";

test("MdiBackupRestore snapshot", () => {
  const wrapper = mount(MdiBackupRestore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
