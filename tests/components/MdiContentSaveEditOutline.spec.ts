
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveEditOutline from "../../src/components/MdiContentSaveEditOutline.vue";

test("MdiContentSaveEditOutline snapshot", () => {
  const wrapper = mount(MdiContentSaveEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
