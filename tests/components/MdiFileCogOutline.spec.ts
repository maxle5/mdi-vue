
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCogOutline from "../../src/components/MdiFileCogOutline.vue";

test("MdiFileCogOutline snapshot", () => {
  const wrapper = mount(MdiFileCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
