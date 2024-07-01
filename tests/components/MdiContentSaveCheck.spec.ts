
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveCheck from "../../src/components/MdiContentSaveCheck.vue";

test("MdiContentSaveCheck snapshot", () => {
  const wrapper = mount(MdiContentSaveCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
