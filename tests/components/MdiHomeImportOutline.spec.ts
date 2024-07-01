
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeImportOutline from "../../src/components/MdiHomeImportOutline.vue";

test("MdiHomeImportOutline snapshot", () => {
  const wrapper = mount(MdiHomeImportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
