
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImport from "../../src/components/MdiFileImport.vue";

test("MdiFileImport snapshot", () => {
  const wrapper = mount(MdiFileImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
