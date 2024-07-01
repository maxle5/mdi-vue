
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveOff from "../../src/components/MdiContentSaveOff.vue";

test("MdiContentSaveOff snapshot", () => {
  const wrapper = mount(MdiContentSaveOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
