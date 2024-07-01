
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSave from "../../src/components/MdiContentSave.vue";

test("MdiContentSave snapshot", () => {
  const wrapper = mount(MdiContentSave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
