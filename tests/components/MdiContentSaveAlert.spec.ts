
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveAlert from "../../src/components/MdiContentSaveAlert.vue";

test("MdiContentSaveAlert snapshot", () => {
  const wrapper = mount(MdiContentSaveAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
