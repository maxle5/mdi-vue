
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImportOutline from "../../src/components/MdiFileImportOutline.vue";

test("MdiFileImportOutline snapshot", () => {
  const wrapper = mount(MdiFileImportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
